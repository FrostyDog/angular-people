import React from "react";
import ContListItem from "./ContListItem";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { getOrgMambers } from "../utility/functions";

export default function ContList() {
  let angularMembers = useSelector((state) => state.angularMembers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getOrgMambers("https://api.github.com/orgs/angular/members").then((res) =>
    dispatch({ type: "addPeople", payload: res })
    );
  }, []);

  return (
    <div className="contList">
      {angularMembers.length < 1 ? <Loading subject="List of Beautifull Angular People" /> : null}

      {angularMembers.map((el) => (
        <LazyLoad key={el.id} placeholder={<Loading />}>
          <ContListItem
            key={el.id}
            name={el.login}
            company={el.company}
            img={el.avatar_url}
            company={el.company}
            followers={el.followers}
            publicRepos={el.publicRepos}
            gists={el.gists}
          />
        </LazyLoad>
      ))}
    </div>
  );
}
