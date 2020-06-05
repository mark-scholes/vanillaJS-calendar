const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const weekday = date.getDay();
const day = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentMonth = months[month];
const dayOfTheWeek = weekdays[weekday];
document.querySelector(".day h1").innerHTML = currentMonth;
document.querySelector(".day p").innerHTML =
  dayOfTheWeek + " " + day + " " + currentMonth + " " + year;

// it would be easier to use toDateString but this puts the date after the month and shortens the weekday
