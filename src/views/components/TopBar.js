import React from 'react';
import { Link } from "react-router-dom";
import { Icon, IconButton } from '@material-ui/core';

export default function TopBar(props) {
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