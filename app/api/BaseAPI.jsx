export const fetchData = query => (
    new Promise((resolve, reject) => fetch(`http://localhost:3000/search?searchQuery=${query}`)
        .then(response => {
            resolve(response.json());
        }, error =>
            // in case of network failure
            reject(`Network failure: ${error.message}`),
        ))
);

export const fetchAdditionalData = (query, extraParam) => (
    new Promise((resolve, reject) => fetch(`http://localhost:3000/getAdditionalRecords?searchQuery=${query}&${extraParam}`)
        .then(response => {
            resolve(response.json());
        }, error =>
            // in case of network failure
            reject(`Network failure: ${error.message}`),
        ))
);
