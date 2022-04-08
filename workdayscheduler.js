//get current date and time
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("H");
var items = {};

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

//retrieve items hour and text from local storage

$(".time-div").append(function (event) {
  JSON.parse(localStorage.getItem("items")) || [];

  for (var i = 0; i < items.length; i++) {
    items[i].hour;
    value.itemText;

    $("[data-hour=" + itemHour + "]")
      .children("textarea")
      .val(itemText);
  }

  console.log(toDoItems);
  alert("we did it");
});
