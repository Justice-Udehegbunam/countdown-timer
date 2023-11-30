const newYears = "1 Jan 2024";

const countdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  // Adjust the time zone offset to GMT+1
  const offset = -1 * 60; // Offset in minutes
  const localTime = new Date(currentDate.getTime() + offset * 60 * 1000);

  const options = { timeZone: "GMT", timeZoneName: "short" };
  console.log(localTime.toLocaleString("en-US", options));

  const totalSeconds = Math.floor((newYearsDate - localTime) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);
};

// Initial call
countdown();
setInterval(countdown, 1000);
