import token from "./token";

export let handleContributionChange = (list, addingItem) => {
  console.log(list);
  let listCopy = list;
  return listCopy.map((item) => {
    const obj = Object.assign({}, item);
    if (item.login === addingItem.login) {
      obj["contributions"] = item.contributions + addingItem.contributions;
    }
    return obj;
  });
};

export let fetchPersonalDetails = async (list, login) => {
  let listCopy = list;
  return listCopy.map((item) => {
    const obj = Object.assign({}, item);
    fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        obj["followers"] = result.followers;
        obj["gists"] = result.public_gists;
        obj["repos"] = result.public_repos;
        return obj;
      });
  });
};
