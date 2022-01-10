import { booksList } from "./BookListSection.js";
import { bookList } from "../modules/BookList.js";

export function displayBook(book) {
  const bookHTML = document.createElement('div');
  bookHTML.className = 'book';
  bookHTML.innerHTML = `
          <p><q>${book.title}</q> by ${book.author}</p>`;

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('type', 'button');
  removeBtn.id = `remove-book-${book.id}`;
  removeBtn.classList.add('btn', 'btn-remove', 'clickeable');
  removeBtn.innerHTML = 'Remove';

  removeBtn.addEventListener('click', (e) => {
    const targetBookId = parseInt(e.target.id.substring(12), 10);
    bookList.books = bookList.books.filter((item) => item.id !== targetBookId);
    bookList.saveBooks();
    removeBtn.parentElement.remove();
  });

  bookHTML.appendChild(removeBtn);

  booksList.appendChild(bookHTML);
}
