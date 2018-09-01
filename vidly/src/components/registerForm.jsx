import React, { Component } from 'react';

import Joi from 'joi-browser';

import Form from './common/form';

class RegisterForm extends Form {
  state = {
    data: { email: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label('Email'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = () => {
    // Call the server
    console.log('>>> RegisterForm Submitted!!');
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
