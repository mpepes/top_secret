const url = require('url');
const paths = require('./utils/apiPaths');
const {makeRequest} = require('./utils/makeRequest');

const {
    pixabayUrl,
    giphyUrl,
} = paths;

module.exports = {
    getBasicContent: (req, res) => {
        const reqUrl = url.parse(req.url, true);
        const { searchQuery } = reqUrl.query;
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        const giphyUrlWithParams = `${giphyUrl}&q=${encodedSearchQuery}`;
        const pixabayUrlWithParams = `${pixabayUrl}&q=${encodedSearchQuery}&image_type=photo&pretty=true`;
        const apiUrls = [giphyUrlWithParams, pixabayUrlWithParams];

        const requests = apiUrls.map(url => makeRequest(url));

        Promise.all(requests).then(responses => {
            const response = {
                searchQuery,
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
                    },
                },
            };

            res.statusCode = 200;
            res.setHeader('Content-Type', 'Application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(response));
        });
    },

    getAdditionalContent: (req, res) => {
        const reqUrl = url.parse(req.url, true);
        const { searchQuery, offset, page } = reqUrl.query;
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        const pixabayUrlWithParams = `${pixabayUrl}&q=${encodedSearchQuery}&image_type=photo&pretty=true&page=${page}`;
        const giphyUrlWithParams = `${giphyUrl}&q=${encodedSearchQuery}&offset=${offset}`;
        const apiUrl = offset ? giphyUrlWithParams : pixabayUrlWithParams;

        makeRequest(apiUrl).then(response => {
            const data = {
                provider: response.data ? 'giphy' : 'pixabay',
                data: response.data || response.hits,
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'Application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(data));
        });
    },
};
