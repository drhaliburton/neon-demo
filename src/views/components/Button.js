import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Btn = (props) => {
  const classes = useStyles();
  return (
    <>
      <Button
        onClick={props.clickAction}
        variant="contained"
        color={props.color}
        className={classes.button}>
        {props.text}
        {props.icon}
      </Button>
    </>
  );
}

export default Btn;

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: '80%',
    margin: '20px',
    height: '60px',
  },
}));