let btnGet = document.getElementById("btn_getdata");
let inputUrl = document.getElementById("url");
inputUrl.value = localStorage.inputURL?localStorage.inputURL:"";
let timestamp = document.getElementById("timestamp");
let response = document.getElementById("response");
btnGet.addEventListener('click', (event) => {
    console.log("click");

    localStorage.inputURL = inputUrl.value;
    fetch(inputUrl.value)
        .then((response) => {
            return response.json();
        })
        .then(function (myJson) {
            console.log("return --> ", myJson);
            timestamp.innerText = new Date();
            console.log(myJson);
            response.innerText = JSON.stringify(myJson, null, 4);
        });

});
