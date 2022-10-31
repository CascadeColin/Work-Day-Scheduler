var currentTime = moment();
var text = "Current unix timestamp: ";
var todayNumber = parseInt(currentTime.format("X"));
var nineToFive = [];
var hourUnixTimestamp;
var hour;
//sets first hour of day in a variable to increment
var timeBlockHour = 9;
var $hour = $(".hour");
var $today = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $text = $(".text")
var textArr = [];

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

$saveBtn.click(function() {
  //check to see if button was already clicked
  if (textArr[0] == undefined) {
    for (i=0;i<$text.length;i++) {
      var $temp = $text.eq(i).val();
      textArr.push($temp);
    }
  } else {
    for (i=0;i<$text.length;i++) {
      var $temp = $text.eq(i).val();
      textArr[i] = $temp;
    }
  }
  localStorage.setItem("0", textArr[0]);
  localStorage.setItem("1", textArr[1]);
  localStorage.setItem("2", textArr[2]);
  localStorage.setItem("3", textArr[3]);
  localStorage.setItem("4", textArr[4]);
  localStorage.setItem("5", textArr[5]);
  localStorage.setItem("6", textArr[6]);
  localStorage.setItem("7", textArr[7]);
  localStorage.setItem("8", textArr[8]);
});

//on page load, input local storage to relevant textarea
function init() {
  timeCheck();
  for (i=0;i<$text.length;i++) {
    $text.eq(i).text(localStorage.getItem(i))
  }
}
init();
