const http = require('http');
const url = require('url');
const controller = require('./controller.js');

module.exports = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/search') {
        controller.getContent(req, res);
    }
});
