import React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

export default function SelectComp() {
  let angularMembers = useSelector((state) => state.angularMembers);
  const dispatch = useDispatch();

  let [sortConfig, setSortConfig] = React.useState("");

  const handleChange = (event) => {
    if (event.target.value === undefined) {
      return;
    }
    setSortConfig(event.target.value);
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
    <div className="select-component">
      <div className="select-wrapper">
        <InputLabel htmlFor="sort-angular-members">Sorting</InputLabel>
        <Select
          labelId="sort-angular-members"
          className="sorting-select"
          onChange={handleChange}
          value={sortConfig}
        >
          <MenuItem value={"following"}>Sort by Following</MenuItem>
          <MenuItem value={"followers"}>Sort by Followers</MenuItem>
          <MenuItem value={"publicRepos"}>Sort by Publc Repos</MenuItem>
          <MenuItem value={"gists"}>Sort by Gists</MenuItem>
        </Select>
      </div>
    </div>
  );
}
