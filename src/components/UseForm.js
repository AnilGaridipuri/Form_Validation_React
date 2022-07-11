import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import FormUserCollage from './FormUserCollage';
import FormUserDetails from './FormUserDetails';
import FormUserAdders from './FormUserAdders'
import Success from './Success';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = ['Personal Details', 'Collage Information', 'Adderss','Login','Overview','Success'];

export class UserForm extends Component {

  state = {
    step: 0,
    firstName: '',
    lastName: '',
    age:'',
    gender:'male',
    email: '',
    password:'',
    collage_name:'',
    location:'',
    year:'First Year',
    course:'Computer Science and Engineering',
    state: '',
    district: '',
    pin: '',
    activeStep: 0
  };




  // Proceed to next step
  nextStep = () => {
    const { step } = this.state; 
    const { activeStep } = this.state; 
      this.setState({
        step: step + 1,
        activeStep: activeStep + 1
     });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    const { activeStep } = this.state;  
    this.setState({
      step: step - 1 ,
      activeStep: activeStep + 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
       
    const { step } = this.state;
    const { 
      firstName, 
      lastName,
      age,
      gender, 
      password,
      email,
      collage_name,
      location,
      year,
      course, 
      state, 
      district, 
      pin, 
      activeStep } = this.state;

    const values = { firstName, 
      lastName,
      age,
      gender, 
      password,
      email,
      collage_name,
      location,
      year,
      course, 
      state, 
      district, 
      pin, 
      activeStep };

    const Header = (props) =>{
      return( 
      <div className='Stepper'>
        <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {}; 
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
        </Stepper>
      </div>
      )
    }

    switch (step) {
      case 0:
        return (
          <div>
            <Header props={values}/>
            <div className='Box'>
            <FormPersonalDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
             <Header props={values}/>
            <div className='Box'>
            <FormUserAdders
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            </div>
          </div>
          );
      case 2:
        return (
          <div>
            <Header props={values}/>
            <div className='Box'>
            <FormUserCollage
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            </div>
          </div>
          );
      case 3:
        return (
          <div>
            <Header props={values}/>
            <div className='Box'>
            <FormUserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            </div>
          </div>
          );
      case 4:
        return (
          <div>
             <Header props={values}/>
            <div className='Box'>
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
            </div>
          </div>
        );
      case 5:
        return(
          <div>
            <Header props={values}/>
            <Success/>;
          </div>
        )
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;