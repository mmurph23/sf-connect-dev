// src/components/App/index.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import { bindActionCreators } from 'redux'
import CreateCase from '../CreateCase'

import { fetchAccounts } from '../../reducers/stateReducer.js';

const login = () => {
  window.location = '/auth/login';
}

const Home = (props) => (

       <div>

           <div className="slds-box slds-theme--shade">
             <p className="slds-text-heading--medium slds-m-bottom--medium">Welcome, please log in with your Salesforce account:</p>
             <div className="slds-align--absolute-center">
               <button onClick={props.login} className="slds-button slds-button--brand">
                 Log in
               </button>
               <button onClick={props.fetchAccounts} className="slds-button slds-button--brand">
                 Get Accounts
               </button>
             </div>
           </div>
          <div className="actsWrap">
               <div className="acts">
                  <h1>Here's some accounts</h1>

                  { props.accounts ? props.accounts.map(account =>
                    <div>{account.Id} - {account.Name}</div>
                  ) : <p>No accounts coming through yet.</p>}
                </div>
          </div>
          <div className="caseFormWrap">
               <CreateCase />
          </div>
     </div>
);


const mapStateToProps = state => ({
  accounts: state.STATE.accounts
});

const mapDispatchToProps = dispatch => bindActionCreators({
     login,
     fetchAccounts
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(Home);
