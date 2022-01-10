/* eslint-disable max-classes-per-file */
import { bookList } from "../modules/BookList.js";
import { header } from "../components/Header.js";
import { main } from '../components/MainSection.js';

function populateMainSection() {
  document.body.appendChild(header);
  document.body.appendChild(main);
}

window.addEventListener('DOMContentLoaded', () => {
  bookList.checkBooks();
  populateMainSection();

  const linkItems = document.querySelectorAll('.nav-item');
  linkItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const activeLink = document.getElementById(item.id);
      const activeSection = document.getElementById(item.id.substring(5));

      if (!activeLink.classList.contains('active')) {
        activeLink.classList.add('active');
        activeSection.classList.remove('d-off');
      }

      linkItems.forEach((previousItem) => {
        const hiddenSection = document.getElementById(previousItem.id.substring(5));
        if (previousItem.id !== item.id && previousItem.classList.contains('active')) {
          previousItem.classList.remove('active');
        }
        if (previousItem.id !== item.id && !hiddenSection.classList.contains('d-off')) {
          hiddenSection.classList.add('d-off');
        }
      });
    });
  });
});

