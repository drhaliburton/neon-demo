import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Btn(props) {
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

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: '80%',
    margin: '20px',
    height: '60px',
  },
}));