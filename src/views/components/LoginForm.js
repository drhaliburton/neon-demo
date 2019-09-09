import React, { useState } from 'react';
import Btn from './Button.js';
import ForgotPw from './ForgotPw.js';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const LoginForm = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })

  const handleChange = name => event => {
    const newVals = { ...values, [name]: event.target.value };
    if (errors.email || errors.password) {
      setErrors({ email: false, password: false });
    }
    setValues(newVals);
  };

  const handleLoginForm = () => {
    const validEmail = validateEmail(values.email);
    const validPw = validatePassword(values.password);
    if (!validEmail || !validPw) {
      setErrors({ email: !validEmail, password: !validPw });
    }
    if (validEmail && validPw) {
      props.handleAuth(values);
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
        type="email"
        error={errors.email}
        className={classes.textField}
        placeholder='Email'
        margin="normal"
        variant="outlined"
        onChange={handleChange('email')}
        helperText={errors.email && 'Enter a valid email'}
      />

      <TextField
        id="outlined-password"
        type="password"
        error={errors.password}
        className={classes.textField}
        placeholder='Password'
        margin="normal"
        variant="outlined"
        onChange={handleChange('password')}
        helperText={errors.password && 'Minimum of 4 characters'}
      />

      <Btn
        clickAction={handleLoginForm}
        text="Sign In"
        color="primary"
        alt="SignIn"
      />

      <ForgotPw />

    </div>
  );
}

export default LoginForm;

const useStyles = makeStyles(theme => ({
  textField: {
    'margin-top': '20px',
    width: '100%',
    'max-width': '80%',
  },
}));