import React from "react";
import { Grid } from "@material-ui/core";
import ContList from "../components/ContList";
import MainDetails from "../components/MainDetails";
import "../theme/styles.scss";

export default function ContListView() {
  // State
  let [details, setDetails] = React.useState(null);

  // json - MainDetails
  function getMainDetails() {
    fetch("/mock-api/Angular.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }

  getMainDetails();

  return (
    <div className="contributers-list-view">
      <Grid container className="main-details">
        <Grid xs={12} lg={3} item>
          { details ? <MainDetails name={details.name} img={details.avatar_url} repos={details.public_repos} /> : null}
        </Grid>

        <Grid xs={12} lg={9} item>
          <ContList />
        </Grid>
      </Grid>
    </div>
  );
}
