import React from "react";
import ContListItem from "./ContListItem";


export default function ContList() {
  let [contributers, setContributers] = React.useState(null);

  console.log(contributers);

  function getContributers() {
    fetch("https://api.github.com/orgs/angular/members?page=1&per_page=5")
      .then((res) => res.json())
      .then((results) => setContributers(results))
  }

//   getContributers() 


  return <div className="contList">
   <ContListItem />
   <ContListItem />

  </div>;
}
