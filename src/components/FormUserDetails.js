import React, { Component } from 'react';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class FormUserDetails extends Component {
  
    continue = e => {
      e.preventDefault();
      this.form.isFormValid(false).then((isValid) => {
        console.log(isValid)
        if (isValid) { 
            this.props.nextStep();
        }
      });
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
        <ValidatorForm   ref={(r) => { this.form = r; }} onSubmit={this.continue} >
        <div className='Userdetails'>
        <h4>
            Enter your Emali and Password
        </h4>
            <TextValidator
              id="standard-basic"
              label="Email"
              type='email'
              variant="outlined"
              placeholder="Enter Your Email Name"
              onChange={handleChange('email')}
              value={values.email}
              margin="normal"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <br />
            <TextValidator 
              id="standard-basic" 
              label="Password"
              type='password'
              variant="outlined" 
              placeholder="Enter Your password"
              onChange={handleChange('password')}
              value={values.password}
              margin="normal"
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <br />  <br />  <br />  <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.back}
            >Back</Button> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
      </div>
        </ValidatorForm>
        );
    }
}
  
export default FormUserDetails ;