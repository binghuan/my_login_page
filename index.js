document.addEventListener("DOMContentLoaded", function (event) {
    console.log(">> DOMContentLoaded");
    let actionUrl = getParameterByName("action");
    console.log("action = ", actionUrl);
    if (actionUrl != null) {
        document.getElementById("form").action = actionUrl;
    }

    let method = getParameterByName("method");
    console.log("method = ", method);
    if (method != null) {
        document.getElementById("form").method = method;
    }
});