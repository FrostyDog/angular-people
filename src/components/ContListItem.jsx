import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";

export default function ContList(props) {
  return (
    <div className="contributers-list-item">
      <Grid container spacing={2} alignItems="center">
        <Grid
          xs={12}
          sm={2}
          lg={3}
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          className="person-info-wrapper"
        >
          <Typography> Name: {props.name}</Typography>
          <Avatar alt={props.name} src={props.img} sizes="large" />
        </Grid>

        <Grid xs={12} sm={10} lg={9} spacing={2} justify="center" container item>
          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Company</Typography>
            <Typography variant="h6">{props.company ? props.company : "unknown"}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Followers</Typography>
            <Typography variant="h6">{props.followers}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Public Repos</Typography>
            <Typography variant="h6">{props.publicRepos}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Gists</Typography>
            <Typography variant="h6">{props.gists}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
