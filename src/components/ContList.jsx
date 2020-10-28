import React from "react";
import ContListItem from "./ContListItem";
import token from "../utility/token";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";
import { fetchPersonalDetails, handleContributionChange } from "../utility/functions";

export default function ContList() {
  let [angularRepos, setAngularRepos] = React.useState([]);
  let [contributors, setContributors] = React.useState([]);
  let [unique, setUnique] = React.useState([]);

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
    getContributors();
  }, [allowGetCont]);

  //   Get unique values
  React.useEffect(() => {
    contributors.forEach((el) => {
      let i = unique.findIndex((x) => x.login == el.login);
      if (i <= -1) {
        setUnique((unique) => [...unique, el]);
      } else {
        let newCopyUnique = handleContributionChange(unique, el);
        setUnique([...newCopyUnique]);
      }
    });
  }, [contributors]);

//   React.useEffect(() => {
//     unique.forEach((el) => {
//       (async () => {
//         let newCopyUnique = await fetchPersonalDetails(unique, el.login);
//         setUnique([...newCopyUnique]);
//       })();
      
//     });
//   }, [unique]);

  return (
    <div className="contList">
      {unique.length < 1 ? <Loading subject="List of Beautifull Angular People" /> : null}

      {unique.map((el) => (
        <LazyLoad key={el.id} placeholder={<Loading />}>
          <ContListItem key={el.id} name={el.login} contributions={el.contributions} img={el.avatar_url} />
        </LazyLoad>
      ))}
    </div>
  );
}
