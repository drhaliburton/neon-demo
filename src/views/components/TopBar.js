import React from 'react';
import { Link } from "react-router-dom";
import { Icon, IconButton } from '@material-ui/core';

const TopBar = (props) => {
  return (
    <div className="top-bar">
      {props.clickAction
        ? <IconButton onClick={props.clickAction}>
          <Icon>{props.icon}</Icon>
        </IconButton>
        : <Link to={props.linkTo}>
          <IconButton>
            <Icon>{props.icon}</Icon>
          </IconButton>
        </Link>
      }
    </div>
  )
}

export default TopBar;