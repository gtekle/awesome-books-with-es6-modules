import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const dateTime = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');

export default dateTime;
