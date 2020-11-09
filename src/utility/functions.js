import token from "./token";

export function getJSON(url) {
  return fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => res.json());
}

export async function fetchAllPages(url, startPage = 1) {
  let result = [];
  let currentPage = startPage;
  let morePagesAvailable = true;

  while (morePagesAvailable) {
    const response = await getJSON(`${url}?page=${currentPage}`);
    let data = await response
    result = [...result, ...data];
    currentPage++;
    morePagesAvailable = data.length > 0;
  }
  return result;
}

