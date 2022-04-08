//get current date and time
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("H");
var items = JSON.parse(localStorage.getItem("items")) || {};

$("#currentDay").append(currentDate);

//run for each
$(".time-div").each(function () {
  var timeDiv = $(this).attr("id");

  //if current hour equals the time block in time-div
  if (currentHour == timeDiv) {
    $(this).addClass("present");
  } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

//once .savebtn is clicked, save to local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id");
  items[time] = value;

  localStorage.setItem("items", JSON.stringify(items));
});

//retrieve items from local storage and print on page
$(".time-div").each(function (event) {
  var time = $(this).attr("id");
  $(this).children(".time-block").val(items[time]);
});
