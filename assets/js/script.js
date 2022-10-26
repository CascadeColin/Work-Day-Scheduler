// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// DONE
var today = moment();
var hour;
//sets first hour of day in a variable to increment
var startHour = 9;
var $hour = $(".hour");

//sets current day and time in header
$("#currentDay").text(today.format("MMM Do, YYYY, hh:mm:ss"));


hour = today.set('hour', startHour);
$hour.text(hour.format("hA"));

$hour.each(function(index) {
    console.log(startHour)
    console.log(index + ": " + $(this).text() );
    startHour++;
    console.log(startHour)
  });


//dynamically update following .hour tags incrementing++ by array class

//moment() go get the current day dynamically

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// DONE?  Does this need to be created using jquery instead of writing HTML?

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist