import React, { useState } from 'react';
import Btn from './Button.js';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    'margin-top': '20px',
    width: '100%',
    'max-width': '80%',
  },
}));

function LoginForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: false,
    pwError: false,
  });

  const handleChange = name => event => {
    const newVals = { ...values, [name]: event.target.value };
    if (values.emailError || values.pwError) {
      newVals['emailError'] = false;
      newVals['pwError'] = false;
    }
    setValues(newVals);
  };

  const handleLoginForm = () => {
    const validEmail = validateEmail(values.email);
    const validPw = validatePassword(values.password);
    if (!validEmail || !validPw) {
      setValues({ ...values, emailError: !validEmail, pwError: !validPw });
    }
    if (validEmail && validPw) {
      console.log('good to go')
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePassword = (pw) => {
    return pw.length >= 4;
  }

  return (
    <div className="login-form">
      <TextField
        id="outlined-email"
        error={values.emailError}
        className={classes.textField}
        placeholder='Email'
        margin="normal"
        variant="outlined"
        onChange={handleChange('email')}
        helperText={values.emailError && 'Enter a valid email'}
      />

      <TextField
        id="outlined-password"
        error={values.pwError}
        className={classes.textField}
        placeholder='Password'
        margin="normal"
        variant="outlined"
        onChange={handleChange('password')}
        helperText={values.pwError && 'Minimum of 4 characters'}
      />

      <Btn
        clickAction={handleLoginForm}
        text="Sign In"
        color="primary"
        alt="SignIn"
      />
    </div>
  );
}

export default LoginForm;



