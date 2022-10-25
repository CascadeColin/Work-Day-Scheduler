// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// DONE
var today = moment();
console.log(today);
console.log(typeof today);
$("#currentDay").text(today.format("MMM Do, YYYY"));

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