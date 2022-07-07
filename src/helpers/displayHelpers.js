export const formatTimeWorked = (timeArr) => {
  let hours, minutes, finalTime;
  hours = timeArr[0];
  minutes = timeArr[1];
  finalTime = minutes
    ? `${hours} hours + ${minutes} min.`
    : hours
    ? `${hours} hours.`
    : null;
  return finalTime;
};

export const formatMoneyMade = (amount) => {
  let result, decimals;
  amount = Math.abs(amount).toFixed(2);
  amount.length === 4 ? (result = `$${amount}0`) : (result = `$${amount}`);
  decimals = result.split(".")[1];
  return decimals === "00" ? result.split(".")[0] : result;
};

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
  } else if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }
  result = `${hours}:${minutes} ${dayOrNight}`;
  return result;
};
