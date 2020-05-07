document.addEventListener("DOMContentLoaded", function (event) {
    console.log(">> DOMContentLoaded");

    let form = document.getElementById("form");

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

    restoreLastInput();
});

function restoreLastInput() {
    if (localStorage.account != null && localStorage.account.trim().length > 0) {
        document.getElementById("inputEmail").value = localStorage.account;
    }

    if (localStorage.password != null && localStorage.password.trim().length > 0) {
        document.getElementById("inputPassword").value = localStorage.password;
    }
}