import {getValues} from 'redux-form';

//Action creator
const INITIAL_STATE = "INITIAL_STATE";
const CREATE_CASE = "CREATE_CASE";

const url = '/api/createCase';

//Reducer Action
export const loadAccounts = (accounts) => ({type: INITIAL_STATE, payload: accounts})
export const sendCaseInfo = (caseNum) => ({type: CREATE_CASE, payload: caseNum})

//helper functions

//actually get the accounts
export const getAccounts = () => {
     return fetch('/api/accounts', {credentials: "include"})
               .then(res => res.json())
}

export const createCase = (request) => {
     var body = JSON.stringify(request);
     console.log('This is the payload from createCase ' + body);
     return fetch(request)
               .then(res => res.json())
}


//Action creator function, links the fetch call to the the reducer action, which calls the reducer
export const fetchAccounts = () => {
     return (dispatch) => {
          getAccounts()
          .then(accounts => dispatch(loadAccounts(accounts)))
     }
}

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
  let newState = [];

  switch (action.type) {
    case INITIAL_STATE:
      return {...state, accounts: action.payload}
    case CREATE_CASE:
      return {...state, caseNum: action.payload}
    default:
      return state;
  }
};
