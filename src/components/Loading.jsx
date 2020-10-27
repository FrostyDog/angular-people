import React from "react";
import {Typography, LinearProgress} from '@material-ui/core';

export default function Loading(props) {
  return <div className="loading">
     <Typography align="center">Loading {props.subject}...</Typography>
     <LinearProgress color="secondary" />

  </div>;
}
