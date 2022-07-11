import React, { Component } from 'react';
import './FormUserDetails.css';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class FormUserAdders extends Component {


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
    const { values } = this.props;
    const { handleChange } = this.props;
    return (
      <ValidatorForm   ref={(r) => { this.form = r; }} onSubmit={this.continue} >
        <div className='Userdetails'>
        <h4>
            Enter your Adderss detalis
        </h4>
            <TextValidator
              id="standard-basic"
              label="State Name"
              variant="outlined"
              placeholder="Enter Your State Name"
              onChange={handleChange('state')}
              value={values.state}
              margin="normal"
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <br />
            <TextValidator
                id="outlined-basic"
                label="District Name"
                variant="outlined"
                placeholder="Enter Your District Name"
                onChange={handleChange('district')}
                value={values.district}
                margin="normal"
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
            <TextValidator
                id="outlined-number"
                label="Pin Code"
                type="number"
                variant="outlined"
                placeholder="Enter Your Pin Code"
                onChange={handleChange('pin')}
                value={values.pin}
                margin="normal"
                validators={['required','maxNumber:999999','minNumber:100000']}
                errorMessages={['this field is required','Pin Code must have  digits']}
            />
            <br />  <br />  <br />  <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.back}
            >Back</Button>&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
            <Button
                color="primary"
                variant="contained"
                type="submit"
            >Continue</Button>
            </div>
      </ValidatorForm>
    );
  }
}

export default FormUserAdders