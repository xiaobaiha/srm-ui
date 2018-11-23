const fetch = require('node-fetch');
module.exports = function(text) {
    return fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ch&dt=t&q="+encodeURI(text),{
        method: "GET",
        headers: {"accept-language": "zh-CN,zh;q=0.9,en;q=0.8"}
    })
    .then(res => res.text())
    .then(text => new Promise((resolve, reject) => {
        const obj = JSON.parse(text);
        resolve(obj[0][0][0]);
    }))
}