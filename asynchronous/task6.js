// 6. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.


function fetchDataFromAPI(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}
// Function to fetch data from multiple APIs concurrently
function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(apiUrl => fetchDataFromAPI(apiUrl));
    return Promise.all(promises);
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined results:', results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
