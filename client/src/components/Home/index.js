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
            
            <div className="jumbotron">
              <h1 class="display-3">Welcome!</h1>
              <p className="lead">Please log in with your Salesforce account:</p>
              <p className="lead">
                <button onClick={props.login} className="btn btn-lg btn-primary">
                  Log in
                </button>
              </p>
            </div>
            <button onClick={props.fetchAccounts} className="btn btn-lg btn-primary">
              Get Accounts
            </button>
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="actsWrap">
                     <div className="acts">
                        <h1>Here are some accounts</h1>

                        { props.accounts ? props.accounts.map(account =>
                          <div>{account.Id} - {account.Name}</div>
                        ) : <p>No accounts coming through yet.</p>}
                      </div>
                </div>
                </div>
                <div className="col col-lg-6">
                  <div className="caseFormWrap">
                       <CreateCase />
                  </div>
                </div>
            </div>
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
