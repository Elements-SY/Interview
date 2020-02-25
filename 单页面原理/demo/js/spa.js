var content = document.getElementById('content');
handlerChange();
window.addEventListener('hashchange', handlerChange);
function handlerChange () {
    switch (location.hash) {
        case '#/classical':
            Ajax('./json/Classical.json');
            break;
        case '#/rap':
            Ajax('./json/Rap.json');
            break;
        case '#/blues':
            Ajax('./json/Blues.json');
            break;
    }
};
function Ajax (url) {
    new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open('GET', url);
        http.send(null);
        http.onreadystatechange = function () {
            if (http.readyState == 4) {
                if (http.status == 200) {//响应成功       
                    resolve(JSON.parse(http.responseText));
                } else {
                    reject(JSON.parse(http.responseText));
                }
            }
        };
    }).then(function (data) {
        console.log(data);
        content.innerHTML = `<h1>${data.singer}</h1><p>${data.songs}</p>`
    }, function (err) {
        console.log(err);
    })
}