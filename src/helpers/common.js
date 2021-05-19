import moment from "moment";

export function getTimeStops(start, end) {
  var startTime = moment(start, "HH:mm");
  var endTime = moment(end, "HH:mm");

  if (endTime.isBefore(startTime)) {
    endTime.add(1, "day");
  }

  var timeStops = [];

  while (startTime <= endTime) {
    timeStops.push(new moment(startTime).format("h:mm a"));
    startTime.add(30, "minutes");
  }
  return timeStops;
}
