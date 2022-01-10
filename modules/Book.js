import { bookList } from "../modules/BookList.js";
import { displayBook } from '../components/BookSection.js';

export default class Book {
  constructor(title, author) {
    this.id = this.idMaker().next().value;
    this.title = title;
    this.author = author;
  }

  // eslint-disable-next-line
  * idMaker() {
    let id;
    if (localStorage.getItem('bookId')) {
      id = parseInt(localStorage.getItem('bookId'), 10);
    } else {
      id = 0;
    }
    while (true) yield (id += 1);
  }

  addBook() {
    bookList.books.push(this);
    localStorage.setItem('bookId', this.id);
    bookList.saveBooks();
    displayBook(this);
  }

  // eslint-disable-next-line
  removeBook(id) {
    bookList.books = bookList.books.filter((book) => book.id !== id);
    bookList.saveBooks();
  }
}