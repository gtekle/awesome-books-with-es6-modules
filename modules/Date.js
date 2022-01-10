import { DateTime } from '../Luxon.js';

export const getDate = () => {
  const now = new DateTime();
  const currentDate = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  return currentDate;
};
