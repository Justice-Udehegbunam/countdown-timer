const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const dayTextEL = document.getElementById("day-text");
const hourTextEL = document.getElementById("hour-text");
const minsTextEL = document.getElementById("mins-text");
const secsTextEL = document.getElementById("sec-text");

/* console.log(dayTextEL, hourTextEL, minsTextEL, secsTextEL); */

const newYears = "1 Jan 2024";

const countdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  // Adjust the time zone offset to GMT+1
  const offset = -1 * 60; // Offset in mins
  const localTime = new Date(currentDate.getTime() + offset * 60 * 1000);

  /* const options = { timeZone: "GMT", timeZoneName: "short" };
   console.log(localTime.toLocaleString("en-US", options)); */

  const totalSeconds = Math.floor((newYearsDate - localTime) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  dayTextEL.textContent = formatText(days, "day");
  hourTextEL.textContent = formatText(hours, "hour");
  minsTextEL.textContent = formatText(mins, "min");
  secsTextEL.textContent = formatText(seconds, "second");
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const formatText = (time, unit) => {
  return time === 1 || time === "01" || time === 0 ? `${unit}` : `${unit}s`;
};

// Initial call
countdown();
setInterval(countdown, 1000);
