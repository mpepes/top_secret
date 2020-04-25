export const fetchData = query => (
    new Promise((resolve, reject) => fetch(`http://localhost:3000/search?searchQuery=${query}`)
        .then(response => {
            resolve(response.json());
        }, error =>
            // in case of network failure
            reject(`Network failure: ${error.message}`),
        ))
);
