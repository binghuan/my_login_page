function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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