// src/components/App/index.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import { bindActionCreators } from 'redux'
import CreateCase from '../CreateCase'
import AccountInfo from '../AccountInfo'
import CasesByAccount from '../CasesByAccount'
import UpdateCase from '../UpdateCase'



import { dispatchFetchAccounts, login } from '../../reducers/stateReducer.js';

/*const login = () => {
  window.location = '/auth/login';
}*/

const Home = (props) => (

       <div>
            <div className="row">
                 {props.location.search != '?valid=true' ? <div className="col-sm-2"></div> :
                 <div className="col-sm-2 left-container">
                      <CasesByAccount />
                 </div>}


          <div className="col-sm-8">
               {props.location.search != '?valid=true' ?
                 <div className="jumbotron login">
                   <h1 className="display-3">Welcome!</h1>
                   <p className="lead">Please log in with your Salesforce account:</p>
                   <p className="lead">
                     <button onClick={props.login} className="btn btn-lg btn-primary">
                       Log in
                     </button>
                   </p>
                 </div> :

               <div className="container central-container">
                    <div className="row">
                         {/*<div className="col col-sm-6">
                              <div className="actsWrap">
                                    <div className="acts">
                                         <button onClick={props.dispatchFetchAccounts} className="btn btn-lg btn-primary">
                                          Get Accounts
                                        </button>
                                       { props.accounts ? props.accounts.map(account =>
                                         <div>{account.Id} - {account.Name}</div>
                                       ) : <p>No accounts coming through yet.</p>}
                                     </div>
                               </div>
                         </div>*/}
                         <div className="col col-sm-1 center-left"></div>
                         <div className="col col-sm-10 center">
                            <div className="caseFormWrap">
                                <CreateCase />
                              </div>
                         </div>
                         <div className="col col-sm-1 center-left"></div>
                    </div>
               </div>}
          </div>
          {props.location.search != '?valid=true' ? <div className="col-sm-2"></div> :
          <div className="col-sm-2 right-container">
               <AccountInfo />
          </div>}
          </div>
     </div>
);


const mapStateToProps = state => ({
  accounts: state.STATE.accounts,
  loggedIn: state.STATE.loggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({
     login,
     dispatchFetchAccounts
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(Home);
