document.addEventListener("DOMContentLoaded", function (event) {
    console.log(">> DOMContentLoaded");

    let form = document.getElementById("form");

    restoreLastInput();

    let isExpired = getParameterByName("expired");
    let password = document.getElementById("inputPassword").value;
    let account = document.getElementById("inputEmail").value;

    console.log("isExpired:", isExpired, account, password);
    if (isExpired && 
            password != null && password.trim().length > 0 && 
            account && account.trim().length > 0) {

        document.getElementById("progress_view").style.display = "inline-block";
        form.style.display = "none";

        sessionStorage.forTokenUpdate = true;
        setTimeout(() => {
            form.submit();
        }, 2000);

        return;
    }

    let timerId = setInterval(() => {
        if (form.style.opacity < 1.0) {
            form.style.opacity = parseFloat(form.style.opacity) + 0.1
        } else {
            clearInterval(timerId);
        }
    }, 100);

    let actionUrl = getParameterByName("action");
    console.log("action = ", actionUrl);
    if (actionUrl != null) {
        form.action = actionUrl;
    }

    let method = getParameterByName("method");
    console.log("method = ", method);
    if (method != null) {
        form.method = method;
    }

    document.getElementById("button_submit").addEventListener("click", () => {
        console.log(">> Submit");

        if (document.getElementById("checkbox_remember").checked) {
            let account = document.getElementById("inputEmail").value;
            let password = document.getElementById("inputPassword").value;

            localStorage.account = account;
            localStorage.password = password;
        }

        form.submit();
    });
});

function restoreLastInput() {
    if (localStorage.account != null && localStorage.account.trim().length > 0) {
        document.getElementById("inputEmail").value = localStorage.account;
    }

    if (localStorage.password != null && localStorage.password.trim().length > 0) {
        document.getElementById("inputPassword").value = localStorage.password;
    }
}