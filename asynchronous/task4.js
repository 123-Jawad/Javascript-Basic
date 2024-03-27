// 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

function downloadParallel(urls) {
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(promises);
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
];

downloadParallel(urls)
    .then(contents => {
        console.log('Contents downloaded successfully:', contents);
    })
    .catch(error => {
        console.error('Error downloading contents:', error);
    });
