import {getValues} from 'redux-form';

//Action creator
const CASES_BY_ACCOUNT = "CASES_BY_ACCOUNT";
const CURRENT_CASE_INFO = "CURRENT_CASE_INFO";

//Reducer Action
export const loadCasesByAccount = (casesByAccount) => ({type: CASES_BY_ACCOUNT, payload: casesByAccount});
export const loadSelectedCase = (caseInfo) => ({type: CURRENT_CASE_INFO, payload: caseInfo});

//helper functions

//get a list of accounts for the loadAccounts action
export const fetchCasesByAccount = () => {
     return fetch('/api/casesByAccount', {credentials: "include"})
               .then(res => res.json())
}

//get selected case information
export const fetchCaseInfo = () => {
     return fetch('/api/getCaseInfo', {credentials: "include"})
               .then(res => res.json())
}

//Action dispatch function, links the fetch call to the the reducer action, which calls the reducer

//dispatch loadCasesByAccount
export const dispatchFetchCasesByAccount = () => {
     return (dispatch) => {
          fetchCasesByAccount()
          .then(casesByAccount => dispatch(loadCasesByAccount(casesByAccount)))
     }
}

//dispatch loadSelectedCase
export const dispatchSelectedCase = () => {
     return (dispatch) => {
          fetchCaseInfo()
               .then(caseInfo => dispatch(loadSelectedCase(caseInfo)))
     }
}

//Reducer
export default (state = [], action) => {

  switch (action.type) {
    case CASES_BY_ACCOUNT:
      return {...state, casesByAccount: action.payload}
    case CURRENT_CASE_INFO:
      return {...state, currentCaseInfo: action.payload}
    default:
      return state;
  }
};
