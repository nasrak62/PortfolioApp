export const formatDate = (stringDate) => {
  const date = new Date(stringDate);

  const day = date.getDate();
  const dayString = day < 10 ? `0${day}` : `${day}`;

  const month = date.getMonth() + 1;
  const monthString = month < 10 ? `0${month}` : `${month}`;

  const year = date.getFullYear();
  const yearString = `${year}`;

  const string = `${yearString}-${monthString}-${dayString}`;

  return string;
};

export const todayMonth = () => {
  const month = new Date().getMonth() + 1;

  const display = Object.keys(MONTHS)[month - 1];
  const value = month < 10 ? `0${month}` : `${month}`;

  return { value, display };
};

export const todayYear = () => {
  return `${new Date().getFullYear()}`;
};

export const MONTHS = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export const YEARS = ["2022"];
