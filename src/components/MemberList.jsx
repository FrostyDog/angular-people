import React from "react";
import MemberListItem from "./MemberListItem";
import LazyLoad from "react-lazyload";
import { forceCheck } from "react-lazyload";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { getOrgMambers } from "../utility/functions";
import SelectComp from "./SelectComp";

export default function ContList() {
  let angularMembers = useSelector((state) => state.angularMembers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getOrgMambers("https://api.github.com/orgs/angular/members").then((res) =>
      dispatch({ type: "addPeople", payload: res })
    );
  }, []);

  React.useEffect(() => {
    forceCheck()
  }, [angularMembers]);


  return (
    <div className="contList">
      {angularMembers.length < 1 ? <Loading subject="List of Beautifull Angular People" /> : null}
      <SelectComp />
      {angularMembers.map((el) => (
        <LazyLoad key={el.id} offset={300} placeholder={<Loading />}>
          <MemberListItem member={el} />
        </LazyLoad>
      ))}
    </div>
  );
}
