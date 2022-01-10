import { dateTime } from "../modules/Date.js";

const header = document.createElement('header');
header.id = 'header';
header.classList.add('d-flex', 'row');
header.innerHTML = `<div id="logo" class="d-flex row"><img src="./assets/img/logo-image.png" alt="Awesome books logo"><a>Awesome
        Books</a>
    </div>
    <nav class="navbar">
      <ul id="nav-list" class="d-flex row">
        <li id="link-list" class="nav-item active"><a class="clickeable">List</a></li>
        <li id="link-add" class="nav-item"><a class="clickeable">Add new</a></li>
        <li id="link-contact" class="nav-item"><a class="clickeable">Contact</a></li>
      </ul>
    </nav>
    <p class="date-time">${dateTime}</p>`;

export { header }
