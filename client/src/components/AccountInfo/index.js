import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import { dispatchSelectedAccountInfo } from '../../reducers/accountsReducer';


const AccountInfo = (props) => (
         <div className="row">
              <div className="col-sm-8">
                   <h1>
                    Account Info
                   </h1>
                   <button onClick={props.dispatchSelectedAccountInfo} className="btn btn-lg btn-primary">
                    Dispatch sum shit
                   </button>
               </div>
         </div>

);



const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchSelectedAccountInfo
}, dispatch);

export default connect(
     null,
     mapDispatchToProps
)(AccountInfo);
