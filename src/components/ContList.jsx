import React from "react";
import ContListItem from "./ContListItem";
import token from "../utility/token";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";

export default function ContList() {
  let [angularRepos, setAngularRepos] = React.useState([]);
  let [contributors, setContributors] = React.useState([]);
  let [unique, setUnique] = React.useState([]);

  let [allowGetCont, setAllowGetCont] = React.useState(false);
  let [listLoading, setlistLoading] = React.useState(true);

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
          setlistLoading(false)
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

  //   Get unique values

  React.useEffect(() => {
    contributors.forEach((el) => {
      let i = unique.findIndex((x) => x.login == el.login);
      if (i <= -1) {
        setUnique((unique) => [...unique, el]);
      }
    });
  }, [contributors]);

  React.useEffect(() => {
    getContributors();
  }, [allowGetCont]);

  return (
    <div className="contList">
      {listLoading ? <Loading subject="List of Beautifull Angular People" /> : null}

      {unique.map((el) => (
        <LazyLoad key={el.id} placeholder={<Loading />}>
          <ContListItem key={el.id} name={el.login} img={el.avatar_url} />
        </LazyLoad>
      ))}
    </div>
  );
}
