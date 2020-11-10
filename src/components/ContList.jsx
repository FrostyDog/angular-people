import React from "react";
import ContListItem from "./ContListItem";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPages } from "../utility/functions";

export default function ContList() {
  let angularMembers = useSelector((state) => state.angularMembers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchAllPages("https://api.github.com/orgs/angular/members").then((res) =>
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
            contributions={el.contributions}
            img={el.avatar_url}
          />
        </LazyLoad>
      ))}
    </div>
  );
}
