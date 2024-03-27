// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

const books = [
    {
      name: 'creative programming',
      author: 'JD . jawad',
      readingStatus: true
    },
    {
      name: 'The blue mask',
      author: 'ali afzal',
      readingStatus: false
    },
  ];
  
  for (let book of books) {
    const { name, author, readingStatus } = book;
    const status = readingStatus ? 'already read' : 'not read yet';
    console.log(`${name} by ${author} - ${status}`);
  }
  