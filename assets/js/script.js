var today = moment();
var text = "Current unix timestamp: ";
var todayNumber = parseInt(today.format('X'));
console.log(today.format('X'));
console.log(todayNumber);

var nineToFive = [];
var hourUnixTimestamp
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
  nineToFive.push(parseInt(hour.format('X')));
  
  // console.log(parseInt(hour.format('X')));
  timeBlockHour++;
}

console.log (nineToFive);
//nineToFive is now an array storing each timeblock as its index (i.e. nineToFive[0] = 9am), just need to hook it up to each element and can then compare them to current time to apply CSS class

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