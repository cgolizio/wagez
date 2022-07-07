import { DateTime } from "luxon";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const initialTimes = {
  start: "",
  stop: "",
  hourly: "",
};

export const initialResult = {
  timeWorked: [],
  moneyMade: "",
};

export const handleHourly = (hours, min, hourly) => {
  let perMin, moneyFromMins, moneyFromHours, total;
  perMin = hourly / 60;
  moneyFromMins = min * perMin;
  moneyFromHours = hourly * hours;

  total = (moneyFromHours + moneyFromMins).toString();
  return total;
};

export const formComponentData = {
  start: {
    title: "start",
    label: "Clocked in: ",
    type: "time",
    errMsg: "What time did you clock in?",
  },
  stop: {
    title: "stop",
    label: "Clocked out: ",
    type: "time",
    errMsg: "What time did you clock out?",
  },
  hourly: {
    title: "hourly",
    label: "$/hour: ",
    type: "number",
    errMsg: "",
  },
};

export const handleDateTime = (values) => {
  const { start, stop, hourly } = values;
  let final, resultObj, resultHours, resultMin;

  let startTime = DateTime.fromISO(start);
  let stopTime = DateTime.fromISO(stop);

  if (stopTime.hour > startTime.hour) {
    resultObj = stopTime.diff(startTime, ["hours", "minutes"]).values;
  } else {
    resultObj = startTime.diff(stopTime, ["hours", "minutes"]).values;
    resultObj.hours = 24 - resultObj.hours;
    if (startTime.minute < stopTime.minute) {
      resultObj.hours -= 1;
      resultObj.minutes = stopTime.minute - startTime.minute;
    }
  }
  if (resultObj.minutes === 0) {
    resultHours = resultObj.hours;
    resultMin = null;
  } else {
    resultHours = resultObj.hours;
    resultMin = resultObj.minutes;
  }
  if (!hourly) {
    final = { timeWorked: [resultHours, resultMin], moneyMade: null };
  } else {
    final = {
      timeWorked: [resultHours, resultMin],
      moneyMade: handleHourly(resultHours, resultMin, hourly),
    };
  }

  return final;
};
