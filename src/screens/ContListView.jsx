import React from "react";
import { Grid } from "@material-ui/core";
import ContList from "../components/ContList";
import "../theme/styles.scss";

export default function ContListView() {
  return (
    <div className="contributers-list-view">
      <Grid xs={12} container>
        <Grid xs={12} lg={3} item></Grid>

        <Grid xs={12} lg={9} item>
            <ContList/>
        </Grid>
      </Grid>
    </div>
  );
}


