import React, { Component } from 'react';
import './FormUserDetails.css';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, 
        lastName,
        age,
        gender, 
        email,
        collage_name,
        location,
        year,
        course, 
        state, 
        district, 
        pin, 
        activeStep }
    } = this.props;
    return (
      <div>
          <div className='Userdetails'>
            <div className='overview'>
            <h3>User personal detalis</h3>
              <List>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Age" secondary={age}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gender" secondary={gender} />
                </ListItem>
              </List>
            </div>
          <h3>College Information</h3>
          <div className='overview-botom'>
          <List>
            <ListItem>
              <ListItemText primary="Collage Name" secondary={collage_name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Course" secondary={course} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year" secondary={year}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Collage Location" secondary={location} />
            </ListItem>
          </List>
          <h3> User Address Information</h3>
          <div className='overview'>
            <List>
            <ListItem>
                <ListItemText primary="State" secondary={state} />
              </ListItem>
              <ListItem>
                <ListItemText primary="District" secondary={district} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pin Code" secondary={pin} />
              </ListItem>
            </List>
          </div>
          <h3> User Email Information</h3>
          <div className='overview'>
          <List>
          <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
          </List>
          </div>
        </div>      
        <br />  <br />  <br />  <br />
          <Button
            color="info"
            variant="contained"
            onClick={this.back}
          >Edit</Button>
          &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </div>
      </div>
    );
  }
}

export default Confirm;