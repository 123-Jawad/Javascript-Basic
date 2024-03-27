// 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.


class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    displayDetails() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`);
    }
} 
  class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
      super(title, author, publicationYear);
      this.price = price;
    }
    displayDetails() {
      super.displayDetails();
      console.log(`Price: $${this.price}`);
    }
  }
  // Here is instance of Ebook
  const ebook = new Ebook('Creative programming', 'Jawad Saleem', 2024, 40);
  // Display details of the Ebook
  ebook.displayDetails();
  