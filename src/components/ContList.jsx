import React from "react";
import ContListItem from "./ContListItem";
import token from "../utility/token";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";

export default function ContList() {
  let [angularRepos, setAngularRepos] = React.useState([]);
  let [contributors, setContributors] = React.useState([]);
  let [allowGetCont, setAllowGetCont] = React.useState(false);
  let [unique, setUnique] = React.useState([]);

  function getContributors() {
    angularRepos.forEach((el) => {
      if (el.name === "jasminewd2") {
        return;
      }
      fetch(`${el.contributors_url}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setContributors((contributors) => [...contributors, ...result]);
        });
    });
  }

  function getRepoes(x) {
    let i = x;
    fetch(`https://api.github.com/orgs/angular/repos?page=${i}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .catch((err) => console.log(err))
      // fetch(`/mock-api/angular-repos.json`)
      .then((res) => res.json())
      .then((results) => {
        if (results.length === 0) {
          console.log("finished");
          setAllowGetCont(true);
        } else {
          setAngularRepos((angularRepos) => [...angularRepos, ...results]);
          getRepoes(i + 1);
        }
      });
  }

  React.useEffect(() => {
    getRepoes(1);
  }, []);

  React.useEffect(() => {
    setUnique(Array.from(new Set(contributors)));
    // console.log(contributors);
  }, [contributors]);

  React.useEffect(() => {
    getContributors();
  }, [allowGetCont]);

  return (
    <div className="contList">
      {unique.map((el) => (
        <LazyLoad  placeholder={<Loading />}>
          <ContListItem  name={el.login} img={el.avatar_url} />
        </LazyLoad>
      ))}
    </div>
  );
}
