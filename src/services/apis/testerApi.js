export const getTester = (testerName) => {
  return fetch(`https://test-api.techsee.me/api/ex/${testerName}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => {
    let json;
    try {
      json = res.json();
    } catch (e) {
      json = e;
    }
    return json;
  });
};
