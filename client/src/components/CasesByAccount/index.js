import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { dispatchFetchCasesByAccount, dispatchSelectedCase } from '../../reducers/casesReducer';
import { dispatchSelectedAccount } from '../../reducers/stateReducer';
import CaseListItem from './Components/CaseListItem'

class CasesByAccount extends Component {

     componentDidMount() {
       if (this.props.casesByAccount == null) {
         this.props.dispatchFetchCasesByAccount();
       }
     }

  render() {

    return (
         <div className="row">
              <div className="col-sm-12">
                   <h1>
                    Cases By Account
                   </h1>
                   <div className="col col-sm-12">
                        <div className="actCasesWrap">


                                 { this.props.casesByAccount ?

                                      this.props.casesByAccount.map((account) => (
                                        <div className="actCases panel-group" key={account.Id}>
                                             <div className="panel panel-default" key={account.Id}>
                                                  <div className="panel-heading" key={account.Id}>
                                                       <h4 className="panel-title" key={account.Id} onClick={ () => this.props.dispatchSelectedAccount(account.Id)}>
                                                            <a href="#" key={account.Id} className={account.Name} >{account.Name}</a>
                                                       </h4>
                                                  </div>
                                                  {this.props.selectedAccount != account.Id ? <div id={account.Id} className="panel-collapse collapse">
                                                       <ul key={account.Id} className="list-group">
                                                       {account.Cases.records.map((cs) => (
                                                           <div><CaseListItem csId={cs.Id} aId={cs.Name} aHref="#" csNum={cs.CaseNumber} /></div>
                                                       ))}
                                                       </ul>
                                                 </div>:
                                                 <div id={account.Id} className="panel-collapse">
                                                      <ul key={account.Id} className="list-group">
                                                      {account.Cases.records.map((cs) => (
                                                          <div><CaseListItem csId={cs.Id} aId={cs.Name} aHref="#" csNum={cs.CaseNumber} /></div>
                                                      ))}
                                                      </ul>
                                                </div>}
                                             </div>
                                        </div>
                                   ))

                                   : <p>No cases coming through yet</p>}


                         </div>
                   </div>
               </div>
         </div>
    );
  }
}

const mapStateToProps = state => ({
  casesByAccount: state.CASES.casesByAccount,
  selectedAccount: state.STATE.selectedAccount,
  selectedCase: state.CASES.selectedCase
});

const mapDispatchToProps = dispatch => bindActionCreators({
     dispatchFetchCasesByAccount,
     dispatchSelectedAccount,
     dispatchSelectedCase
}, dispatch);

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(CasesByAccount);
