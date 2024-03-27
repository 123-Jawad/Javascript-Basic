// 9. Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        console.error('Error:', error);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const requestTimeout = 5000; 

fetchDataWithTimeout(apiUrl, requestTimeout)
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));
