import dateTime from '../modules/Date.js';

const header = document.getElementById('header');
const dateTimeLabel = document.createElement('p');
dateTimeLabel.classList.add('date-time');
dateTimeLabel.textContent = dateTime;

header.appendChild(dateTimeLabel);

export default header;
