import React, { useState } from 'react';
import SocialLogin from './components/SocialLogin.js';
import LoginForm from './components/LoginForm.js';
import TopBar from './components/TopBar.js';
import Btn from './components/Button.js';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function LoginPage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(false)

  const handleOpen = (name) => {
    if (name) {
      setName(name);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderWelcome = () => {
    if (name) {
      return `Welcome Back ${name}`;
    }
  }

  return (
    <div className="page-container">
      <TopBar icon="arrow_back" linkTo="/" />
      <div className="content-container scale-up-center">
        <LoginForm openModal={handleOpen} />
        <SocialLogin openModal={handleOpen} />

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
              {renderWelcome()}
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
    </div>
  );
}

export default LoginPage;

const useStyles = makeStyles(theme => ({
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