var today = moment();
var todayString = "Current unix timestamp: ";
console.log(todayString + today.format('X'));

var hour;
//sets first hour of day in a variable to increment
var timeBlockHour = 9;
var $hour = $(".hour");
var $today =$("#currentDay")

//sets current day and time in header
$today.text(today.format("MMM Do, YYYY, hh:mmA"));
// $today.text(today.format("X"));

//sets the time of each timeblock dynamically so it can be compared to unix timestamp
for (i=0; i<$hour.length; i++) {
  hour = today.set('hour', timeBlockHour);
  $hour.eq(i).text(hour.format("hA"));
  console.log(hour.format('X'));
  console.log(parseInt(hour.format('X')));
  timeBlockHour++;
}

// This changed 9am to unix timestamp on the actual web app...wtf?
// console.log($hour.eq(0).text(hour.format("X")));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// PSEUDO
// Compare to unix timestamp
// if (today > hour) {
//   apply class .past
// } else if ( today = hour) {
//   apply class .present
// } else {
//   apply class .future
// }

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist