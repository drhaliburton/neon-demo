import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Modal, Fade, Backdrop } from '@material-ui/core';
import Btn from './Button.js';
import TopBar from './TopBar.js';

const ForgotPw = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: false,
  })

  const handleChange = name => event => {
    const newVals = { ...values, [name]: event.target.value };
    if (errors.email) {
      setErrors({ email: false, password: false });
    }
    setValues(newVals);
  };

  const handleLoginForm = () => {
    const validEmail = validateEmail(values.email);
    if (!validEmail) {
      return setErrors({ email: !validEmail });
    }
    handleClose();
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <Button onClick={handleOpen} color="secondary">
        Forgot Password?
      </Button>
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
            <TopBar icon="close" clickAction={handleClose} />
            <h2 id="transition-modal-title">Reset Password</h2>
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
            <Btn
              clickAction={handleLoginForm}
              text="Reset Password"
              color="primary"
              alt="Reset"
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default ForgotPw;

const useStyles = makeStyles(theme => ({
  textField: {
    margin: '20px auto 25px',
    width: '90%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    width: '80%',
    outline: 0,
  },
}));
