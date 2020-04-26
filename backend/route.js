const http = require('http');
const url = require('url');
const {
    getBasicContent,
    getAdditionalContent,
} = require('./controller.js');

module.exports = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/search') {
        getBasicContent(req, res);
    }

    if (reqUrl.pathname === '/getAdditionalRecords') {
        getAdditionalContent(req, res);
    }
});
