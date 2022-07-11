import logo from './logo.svg';
import './App.css';
import UserForm from './components/UseForm';
// import {Button} from '@material-ui/core';
import {Button} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div> 
      <UserForm/>
    </div>
  );
}

export default App;
