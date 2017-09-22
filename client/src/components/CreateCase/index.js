import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import { bindActionCreators } from 'redux'
import { Form, Field, reduxForm } from 'redux-form'

import { dispatchCaseCreate } from '../../reducers/stateReducer.js';



let CreateCase =  ({ dispatchCaseCreate, fields: {SuppliedName, WebSite, SuppliedEmail, Subject, Description, AccountId}, handleSubmit, pristine, reset, submitting }) => (

    <Form
         className="createCase-form"
         onSubmit={handleSubmit(dispatchCaseCreate)}>
      <div>
        <label>Full Name</label>
        <div>
          <Field
            name="SuppliedName"
            component="input"
            type="text"
            placeholder="Full Name"
            {...SuppliedName}
          />
        </div>
      </div>
      <div>
        <label>DDC Website URL</label>
        <div>
          <Field
            name="WebSite"
            component="input"
            type="text"
            placeholder="www.example.com"
            {...WebSite}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="SuppliedEmail"
            component="input"
            type="email"
            placeholder="Email"
            {...SuppliedEmail}
          />
        </div>
      </div>
      <div>
        <label>Subject</label>
        <div>
          <Field
            name="Subject"
            component="input"
            type="text"
            placeholder="Test from CLI #7"
            {...Subject}
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="Description" component="textarea" {...Description}/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
     </Form>

);
//connect to react redux with no mapStateToProps, and pass dispatchCaseCreate as a prop. Then, wrap component in reduxForm
export default connect(null, {dispatchCaseCreate})(reduxForm({
  form: 'createCase', // a unique identifier for this form
  fields: ['SuppliedName', 'WebSite', 'SuppliedEmail', 'Subject', 'Description', 'AccountId'],
  initialValues: {AccountId: 'placeholder'}
})(CreateCase));
