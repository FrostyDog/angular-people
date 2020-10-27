import React from "react";
import ContListItem from "./ContListItem";
import token from "../utility/token";

export default function ContList() {
  let [angularRepos, setAngularRepos] = React.useState([]);
  let [contributors, setContributors] = React.useState([]);
  let [allowGetCont, setAllowGetCont] = React.useState(false);

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
          //   setContributors(...new Set(contributors));
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
    console.log(contributors);
  }, [contributors]);

  React.useEffect(() => {
    getContributors();
  }, [allowGetCont]);

  return (
    <div className="contList">
      {contributors.map((el) => (
        <ContListItem name={el.login} />
      ))}
    </div>
  );
}
