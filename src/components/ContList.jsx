import React from "react";
import ContListItem from "./ContListItem";
import token from "../utility/token";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";
import {
  getJSON
} from "../utility/functions";

export default function ContList() {
  let [angularMembers, setangularMembers] = React.useState([]);


function FetchAllPages(url) {
  let currentPage = 1
  for( currentPage !== 0, currentPage += 1) {
  if(getJSON(`${url}?page=${currentPage}`).length > 0 {

  currentPage + 1
} else {currentPage = 0}
  }
}

React.useEffect(() => {
  getJSON()

})

  return (
    <div className="contList">
      {unique.length < 1 ? (
        <Loading subject="List of Beautifull Angular People" />
      ) : null}

      {unique.map((el) => (
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
