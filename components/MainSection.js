import { bookListSection } from './BookListSection.js';
import { contactSection } from '../components/ContactSection.js';
import { addBookSection } from '../components/AddNewBookSection.js';

const main = document.createElement('main');
main.id = "main";
const mainSectionTitle = document.createElement('h1');
mainSectionTitle.textContent = 'Awesome books';
main.appendChild(mainSectionTitle);

main.appendChild(bookListSection);
main.appendChild(addBookSection);
main.appendChild(contactSection);

export { main };