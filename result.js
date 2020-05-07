document.addEventListener("DOMContentLoaded", function (event) {

    let statusImg = document.getElementById("status");
    let token = getParameterByName("token");
    let msg = document.getElementById("msg");
    if (token != null) {
        statusImg.src = "images/ok.svg";
        msg.innerText = "Login Successfully!";
        msg.style.color = "blue";
        setCookie("token", token);
    } else {
        statusImg.src = "images/fail.svg";
        msg.innerText = "Login Failed!";
        msg.style.color = "red";
    }

});
