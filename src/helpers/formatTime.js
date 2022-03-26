export const formatTime = (time) => {
  let timeArr = time.split(":").map((num) => Number(num));
  let hours = timeArr[0];
  let minutes = timeArr[1];
  let dayOrNight;
  let result;
  if (hours > 12) {
    hours = hours - 12;
    dayOrNight = "PM";
  } else {
    dayOrNight = "AM";
  }
  if (minutes === 0) {
    minutes = "00";
  }
  result = `${hours}:${minutes} ${dayOrNight}`;
  return result;
};
