const https = require('https');
const url = require('url');

const pixabayApiKey = '16139308-5012b748918ab79cd0c7c8672';
const giphyApiKey = 'U6aXd0nF8k0gnahNILwNPxPI2Q3XIP4m';

exports.getContent = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const searchQuery = reqUrl.query.searchQuery;
    const encodedSearchQuery = encodeURIComponent(searchQuery);
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${encodedSearchQuery}`;
    const pixabayUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodedSearchQuery}&image_type=photo&pretty=true`;
    const apiUrls = [giphyUrl, pixabayUrl];

const makeRequest = url => (
    new Promise((resolve, reject) => {
        const request = https.get(url, res => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => resolve(JSON.parse(body)));
        })
    })
);

const requests = apiUrls.map(url => makeRequest(url));

Promise.all(requests).then(responses => {
    const response = {
        searchQuery: searchQuery,
        data: {
            giphy: {
                items: responses[0].data,
                pagination: {
                    total: responses[0].pagination.total_count,
                    offset: responses[0].pagination.offset,
                    },
                },
            pixabay: {
                items: responses[1].hits,
                pagination: {
                    total: responses[1].totalHits,
                    },
                }
        }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'Application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(response));
    });
};
