setCookie("token", "");

let url = `beaker://enmabrowser.api/logout`;
fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
}).then(response => response.text());