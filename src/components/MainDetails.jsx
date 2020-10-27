import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../theme/styles.scss";

export default function MainDetails(props) {
  return (
    <div className="mainDetails">
        <Grid container direction="column" alignItems="center">
            <img src={props.img} alt=""/>
            <Typography variant="h3">
                {props.name}
            </Typography>

            <Typography>
                Public Repos: {props.repos}
            </Typography>
            
        </Grid>

    </div>
  );
}


