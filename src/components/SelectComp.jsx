import React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

export default function SelectComp() {
  let angularMembers = useSelector((state) => state.angularMembers);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value === undefined) {
      return;
    }
    const comparisonPoint = event.target.value;
    sort(angularMembers, comparisonPoint);
  };

  function sort(angularMembers, comparisonPoint) {
    let sortedAngularMembers = angularMembers.sort(
      (a, b) => b[comparisonPoint] - a[comparisonPoint]
    );

    dispatch({ type: "sortPeople", payload: sortedAngularMembers });
  }
  return (
    <div className="select">
      <InputLabel htmlFor="age-native-simple">Sorting</InputLabel>
      <Select onChange={handleChange} value={""}>
        <MenuItem value={"following"}>Following</MenuItem>
        <MenuItem value={"followers"}>Followers</MenuItem>
        <MenuItem value={"publicRepos"}>Repos</MenuItem>
        <MenuItem value={"gists"}>Gists</MenuItem>
      </Select>
    </div>
  );
}
