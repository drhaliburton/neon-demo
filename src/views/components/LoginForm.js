import React, { useState } from 'react';
import Btn from './Button.js';
import ForgotPw from './ForgotPw.js';
import { TextField, Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    'margin-top': '20px',
    width: '100%',
    'max-width': '80%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '80%',
    outline: 0,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })
  const [open, setOpen] = useState(false);


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
      handleOpen();
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePassword = (pw) => {
    return pw.length >= 4;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="login-form">
      <TextField
        id="outlined-email"
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Login Successful!</h2>
            <Btn
              clickAction={handleClose}
              text="Continue Shopping"
              color="primary"
              alt="Continue"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default LoginForm;