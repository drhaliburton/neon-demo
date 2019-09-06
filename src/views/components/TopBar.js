import React from 'react';
import { Link } from "react-router-dom";
import { Icon, IconButton } from '@material-ui/core';

export default function TopBar(props) {
  if (props.clickAction) {
    return (
      <div className="top-bar">
        <IconButton onClick={props.clickAction}>
          <Icon>{props.icon}</Icon>
        </IconButton>
      </div>
    )
  } else {
    return (
      <div className="top-bar">
        <Link to={props.linkTo}>
          <IconButton>
            <Icon>{props.icon}</Icon>
          </IconButton>
        </Link>
      </div>
    )
  }
}