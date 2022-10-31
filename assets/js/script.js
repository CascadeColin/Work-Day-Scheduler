var currentTime = moment();
var text = "Current unix timestamp: ";
var todayNumber = parseInt(currentTime.format("X"));
//current time as a number


var nineToFive = [];
var hourUnixTimestamp;
var hour;
//sets first hour of day in a variable to increment
var timeBlockHour = 9;
var $hour = $(".hour");
var $today = $("#currentDay");

//sets current day and time in header
function displayTime() {
  var now = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  $today.text(now);
}
setInterval(displayTime, 1000);

//sets the time of each timeblock dynamically so it can be compared to unix timestamp
function timeCheck() {
  for (i = 0; i < $hour.length; i++) {
    hour = currentTime.set("hour", timeBlockHour);
    $hour.eq(i).text(hour.format("hA"));
    nineToFive.push(parseInt(hour.format("X")));
    if (nineToFive[0] == todayNumber) {
      $("textarea:eq(0)").addClass("present");
    } if (nineToFive[0] < todayNumber) {
      $("textarea:eq(0)").addClass("past");
    } if (nineToFive[0] > todayNumber) {
      $("textarea:eq(0)").addClass("future");
      // time2
    } if (nineToFive[1] == todayNumber) {
      $("textarea:eq(1)").addClass("present");
    } if (nineToFive[1] < todayNumber) {
      $("textarea:eq(1)").addClass("past");
    } if (nineToFive[1] > todayNumber) {
      $("textarea:eq(1)").addClass("future");
      //time 3
    } if (nineToFive[2] == todayNumber) {
      $("textarea:eq(2)").addClass("present");
    } if (nineToFive[2] < todayNumber) {
      $("textarea:eq(2)").addClass("past");
    } if (nineToFive[2] > todayNumber) {
      $("textarea:eq(2)").addClass("future");
      //time 4
    } if (nineToFive[3] == todayNumber) {
      $("textarea:eq(3)").addClass("present");
    } if (nineToFive[3] < todayNumber) {
      $("textarea:eq(3)").addClass("past");
    } if (nineToFive[3] > todayNumber) {
      $("textarea:eq(3)").addClass("future");
      //time 5
    } if (nineToFive[4] == todayNumber) {
      $("textarea:eq(4)").addClass("present");
    } if (nineToFive[4] < todayNumber) {
      $("textarea:eq(4)").addClass("past");
    } if (nineToFive[4] > todayNumber) {
      $("textarea:eq(4)").addClass("future");
      //time 6
    } if (nineToFive[5] == todayNumber) {
      $("textarea:eq(5)").addClass("present");
    } if (nineToFive[5] < todayNumber) {
      $("textarea:eq(5)").addClass("past");
    } if (nineToFive[5] > todayNumber) {
      $("textarea:eq(5)").addClass("future");
      //time 7
    } if (nineToFive[6] == todayNumber) {
      $("textarea:eq(6)").addClass("present");
    } if (nineToFive[6] < todayNumber) {
      $("textarea:eq(6)").addClass("past");
    } if (nineToFive[6] > todayNumber) {
      $("textarea:eq(6)").addClass("future");
      //time 8
    } if (nineToFive[7] == todayNumber) {
      $("textarea:eq(7)").addClass("present");
    } if (nineToFive[7] < todayNumber) {
      $("textarea:eq(7)").addClass("past");
    } if (nineToFive[7] > todayNumber) {
      $("textarea:eq(7)").addClass("future");
      //time 8
    } if (nineToFive[8] == todayNumber) {
      $("textarea:eq(8)").addClass("present");
    } if (nineToFive[8] < todayNumber) {
      $("textarea:eq(8)").addClass("past");
    } if (nineToFive[8] > todayNumber) {
      $("textarea:eq(8)").addClass("future");
    } 
    timeBlockHour++;
  }
}
timeCheck();


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
