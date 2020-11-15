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
          <Typography> Name: {props.member.login}</Typography>
          <Avatar alt={props.member.login} src={props.member.avatar_url} sizes="large" />
        </Grid>

        <Grid xs={12} sm={10} lg={9} spacing={2} justify="center" container item>
          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Company</Typography>
            <Typography variant="h6">{props.member.company ? props.member.company : "unknown"}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Followers</Typography>
            <Typography variant="h6">{props.member.followers}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Public Repos</Typography>
            <Typography variant="h6">{props.member.publicRepos}</Typography>
          </Grid>

          <Grid item xs={3} className="criteria-wrapper">
            <Typography>Gists</Typography>
            <Typography variant="h6">{props.member.gists}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
