import React, { Component } from 'react';
import './FormUserDetails.css';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Course_name = [
    'Computer Science and Engineering',
    'Mechanical Engineering',
    'Electronics and Communication Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Aeronautical Engineering',
    'Biotechnology Engineering'
  ];
const year= [
    'First Year',
    'Second Year',
    'Third Year',
    'Final Year'
  ];

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
    const { values } = this.props;
    const { handleChange } = this.props;
    return (
      <ValidatorForm   ref={(r) => { this.form = r; }} onSubmit={this.continue} >
        <div className='Userdetails'>
        <h4>
            Enter your Collage detalis
        </h4>
          <TextValidator
            id="outlined-basic"
            label="Collage Name"
            variant="outlined"
            placeholder="Enter Your Collage Name"
            onChange={handleChange('collage_name')}
            value={values.collage_name}
            margin="normal"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <FormControl sx={{ m: 1, width: 230 }}>
            <InputLabel id="demo-multiple-name-label">Course</InputLabel>
                <Select
                    defaultValue={'Computer Science and Engineering'}
                    label="Course"
                    variant="outlined"
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={values.course}
                    onChange={handleChange('course')} 
                >
                {Course_name.map((Course_name) => (
                    <MenuItem
                    key={Course_name}
                    value={Course_name}
                    >
                    {Course_name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <br />
            <FormControl sx={{ m: 1, width: 230 }}>
                <InputLabel id="demo-multiple-name-label">Year</InputLabel>
                <Select
                    defaultValue={'First Year'}
                    label="Course"
                    variant="outlined"
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={values.year}
                    onChange={handleChange('year')} 
                >
                {year.map((year) => (
                    <MenuItem
                    key={year}
                    value={year}
                    >
                    {year}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <TextValidator
                id="standard-basic"
                label="Location"
                variant="outlined"
                placeholder="Enter Your Collage location Name"
                onChange={handleChange('location')}
                value={values.location}
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
                type="submit"
            >Continue</Button>
        </div>
      </ValidatorForm>
    );
  }
}

export default FormUserDetails;