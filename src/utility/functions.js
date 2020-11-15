import token from "./token";

export function getJSON(url) {
  return fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => res.json());
}

async function addNewMembersData(arrayForNewData) {
  let result = await Promise.all(
    arrayForNewData.map(async (el) => {
      let newElement = await fetchPersonalData(el);
      return await newElement;
    })
  );

  return result;
}

async function fetchPersonalData(person) {
  let response = await getJSON(`https://api.github.com/users/${person.login}`);
  let additionalData = await response;
  return Object.assign({}, person, {
    company: additionalData.company,
    followers: additionalData.followers,
    publicRepos: additionalData.public_repos,
    gists: additionalData.public_gists,
  });
}

export async function fetchAllPages(url, startPage = 1) {
  let result = [];
  let currentPage = startPage;
  let morePagesAvailable = true;

  while (morePagesAvailable) {
    const response = await getJSON(`${url}?page=${currentPage}`);
    let data = await response;
    result = [...result, ...data];
    currentPage++;
    morePagesAvailable = data.length > 0;
  }

  return result;
}

export async function getOrgMambers(url) {
  let result = await fetchAllPages(url);
  result = await addNewMembersData(result);

  return result;
}
