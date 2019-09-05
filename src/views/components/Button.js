import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: '80%',
    margin: '20px',
    height: '60px',
  },
}));

export default function Btn(props) {

  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        size="large"
        color={props.color}
        className={classes.button}>
        {props.text}
      </Button>
    </>
  );
}

