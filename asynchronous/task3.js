// 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function makeGetRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
makeGetRequest(apiUrl)
    .then(data => console.log('Response data:', data))
    .catch(error => console.error('Error:', error));
