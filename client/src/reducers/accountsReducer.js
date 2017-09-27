//Action creator
const SELECTED_ACCOUNT_INFO = "SELECTED_ACCOUNT_INFO";

//Reducer Action
const loadSelectedAccountInfo = (selectedAccountInfo) => ({type: SELECTED_ACCOUNT_INFO, payload: selectedAccountInfo});

//helper functions
export const fetchSelectedAccountInfo = () => {
     return fetch('/api/accountInfo', {credentials: "include"})
               .then(res => res.json())
}


//Action dispatch function, links the fetch call to the the reducer action, which calls the reducer
export const dispatchSelectedAccountInfo = (payload) => {
     return(dispatch) => {
          fetchSelectedAccountInfo()
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
