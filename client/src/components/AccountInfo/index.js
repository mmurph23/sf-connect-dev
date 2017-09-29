import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import { dispatchSelectedAccountInfo } from '../../reducers/accountsReducer';



const AccountInfo = (props, sendCase) => (

         <div className="row">
              <div className="col-sm-8">
                   <h1>
                    Account Info
                   </h1>
                   <button onClick={props.dispatchSelectedAccountInfo} className="btn btn-lg btn-primary">
                    Get Account Info
                   </button>
               </div>
         </div>

);

const mapStateToProps = state => ({
  selectedAccount: state.STATE.selectedAccount
});

const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchSelectedAccountInfo
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(AccountInfo);
