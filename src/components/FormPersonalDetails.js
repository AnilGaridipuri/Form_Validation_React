import React, { Component } from 'react';
import './FormUserDetails.css';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export class FormPersonalDetails extends Component {

 
  componentWillUnmount() {
      // remove rule when it is not needed
      ValidatorForm.removeValidationRule('isPasswordMatch');
  }
  continue = e => {
    e.preventDefault();
    this.form.isFormValid(false).then((isValid) => {
      console.log(isValid)
      if (isValid) { 
          this.props.nextStep();
      }
    });
  };

  render() {
    const { values } = this.props;
    const { handleChange } = this.props;
    return (
      <ValidatorForm   ref={(r) => { this.form = r; }} onSubmit={this.continue} >
        <div >
        <div className='Userdetails'>
          <h4>
            Enter your Personal detalis
          </h4>
          <TextValidator
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            onChange={handleChange('firstName')}
            value={values.firstName}
            margin="normal"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            id="standard-basic"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            onChange={handleChange('lastName')}
            value={values.lastName}
            margin="normal"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            id="outlined-number"
            label="Age"
            type="number"
            variant="outlined"
            placeholder="Enter Your age"
            onChange={handleChange('age')}
            value={values.age}
            margin="normal"
            validators={['required','maxNumber:100','minNumber:1']}
            errorMessages={['this field is required','Age is must in range 1 to 100','Age is must in range 1 to 100']}
          />
          <br />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={values.gender}
              onChange={handleChange('gender')}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male"  />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <br />  <br />  <br />  <br />
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >Continue</Button>
          </div>
        </div>
      </ValidatorForm>
    );
  }
}

export default FormPersonalDetails;
