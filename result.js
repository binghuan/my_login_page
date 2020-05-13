document.addEventListener("DOMContentLoaded", function (event) {

    let statusImg = document.getElementById("status");
    let token = getParameterByName("token");
    let msg = document.getElementById("msg");
    if (token != null) {
        statusImg.src = "images/ok.svg";
        msg.innerText = "Login Successfully!";
        msg.style.color = "blue";
        setCookie("token", token);

        let url = `beaker://enmabrowser.api/send?accessToken=${token}&${token}`;
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
        }).then(response => response.text());
    } else {
        statusImg.src = "images/fail.svg";
        msg.innerText = "Login Failed!";
        msg.style.color = "red";
        setCookie("token", "");
    }
});
