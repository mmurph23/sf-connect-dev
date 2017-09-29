//Action creator
const SELECTED_ACCOUNT_INFO = "SELECTED_ACCOUNT_INFO";

//Reducer Action
const loadSelectedAccountInfo = (selectedAccountInfo) => ({type: SELECTED_ACCOUNT_INFO, payload: selectedAccountInfo});

//helper functions
export const fetchSelectedAccountInfo = (request) => {
     var body = JSON.stringify(request);
     console.log('This is the payload from createCase ' + body);
     return fetch(request)
               .then(res => res.json())
}


//Action dispatch function, links the fetch call to the the reducer action, which calls the reducer
export const dispatchSelectedAccountInfo = () => {
     return(dispatch, getState) => {
          let state = getState();
          let selectedAccount = state.STATE.selectedAccount;
          let data = {
               selectedAccount: selectedAccount,
          }

          const request = new Request('/api/accountInfo', {
               method: 'POST',
               body: JSON.stringify(data),
               headers:{'content-type': 'application/json'},
               credentials: 'include'
          });

          fetchSelectedAccountInfo(request)
          .then(payload => dispatch(loadSelectedAccountInfo(payload)))
     }
}

//Reducer
export default (state = [], action) => {

  switch (action.type) {
    case SELECTED_ACCOUNT_INFO:
      return {...state, selectedAccountInfo: action.payload}
    default:
      return state;
  }
};
