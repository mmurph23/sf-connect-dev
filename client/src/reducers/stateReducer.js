import {getValues} from 'redux-form';

//Action creator
const INITIAL_STATE = "INITIAL_STATE";
const CREATE_CASE = "CREATE_CASE";
const LOGGED_IN = "LOGGED_IN";
const SELECTED_ACCOUNT = "SELECTED_ACCOUNT";

//Reducer Action
export const loggedIn = () => ({type:LOGGED_IN})
export const loadAccounts = (accounts) => ({type: INITIAL_STATE, payload: accounts})
export const sendCaseInfo = (caseNum) => ({type: CREATE_CASE, payload: caseNum})
export const updateSelectedAccount = (accountId) => ({type: SELECTED_ACCOUNT, payload: accountId})

//helper functions

//get a list of accounts for the loadAccounts action
export const getAccounts = () => {
     return fetch('/api/accounts', {credentials: "include"})
               .then(res => res.json())
}

//create a new case
export const createCase = (request) => {
     var body = JSON.stringify(request);
     console.log('This is the payload from createCase ' + body);
     return fetch(request)
               .then(res => res.json())
}




//Action dispatch function, links the fetch call to the the reducer action, which calls the reducer

//increment number of times logged in
export const login = () => {
          window.location = '/auth/login';
     return (dispatch) => {
          loggedIn()
     }
}

//dispatch selectedAccount
export const dispatchSelectedAccount = (payload) => {
     return(dispatch) => {
          dispatch(updateSelectedAccount(payload))
     }
}

//dispatch loadAccounts
export const dispatchFetchAccounts = () => {
     return (dispatch) => {
          getAccounts()
          .then(accounts => dispatch(loadAccounts(accounts)))
     }
}


//dispatch sendCaseInfo
export const dispatchCaseCreate = (payload) => {

     console.log(payload);

     return (dispatch) => {

          let data = {
               AccountId: payload.AccountId,
               Origin: 'Web',
               WebSite: payload.WebSite,
               Subject: payload.Subject,
               Description: payload.Description,
               SuppliedName: payload.SuppliedName,
               SuppliedEmail: payload.SuppliedEmail
          }

          console.log("this is the payload from dispatchCaseCreate" + JSON.stringify(data));

          const request = new Request('/api/createCase', {
               method: 'POST',
               body: JSON.stringify(data),
               headers:{'content-type': 'application/json'},
               credentials: 'include'
          });

          console.log('This is the request from dispatchCaseCreate' + JSON.stringify(request));

          createCase(request)
          .then(caseNum => dispatch(sendCaseInfo(caseNum)))
     }
}
//Reducer functions

//Reducer
export default (state = [], action) => {

  switch (action.type) {
    case INITIAL_STATE:
      return {...state, accounts: action.payload}
    case CREATE_CASE:
      return {...state, caseNum: action.payload}
    case LOGGED_IN:
      return {...state, loggedIn: state.loggedIn += 1 }
    case SELECTED_ACCOUNT:
      return {...state, selectedAccount: action.payload}
    default:
      return state;
  }
};
