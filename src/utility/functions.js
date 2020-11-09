import token from "./token";


export getJSON(url) {
  fetch(`${url}`, {
    headers: {
      Authorization: `token ${token}`
    }
  }
  .then(res => res.json())
}
