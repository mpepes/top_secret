const https = require('https');

module.exports = {
    makeRequest: (url) => (
        new Promise((resolve, reject) => (
            https.get(url, (res) => {
                let body = '';
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => resolve(JSON.parse(body)));
            })
        ))
    ),
};
