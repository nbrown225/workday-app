//const moment = require("moment");

//const moment = require("moment");

var m = moment();
var monday = document.querySelector(".mon")
var showCurrentDay = document.querySelector('#currentDay');
var showDate = m.format('dddd MMM Mo YYYY')

console.log(showDate);
//console.log(m);
 
showTime = () => {
    showCurrentDay.innerHTML = showDate
}
document.addEventListener('onload', showTime())


// GET CURRENT TIME
var currentHour = m.format('hh');
console.log(currentHour);


// PAST FUNCTION
// const testA = document.getElementsById('bob')
// console.log(testA);
// const testb = testA.getElementsByClassName('hour-3')
// console.log(testb);
// PRESENT FUNCTION
//  function presetChange () {
//     console.log('hF');
//     element = document.
//     let val = element.attribute[0].value;
//     console.log(val);
//     //  var present = document.getElementsByTagName('tr').value
//     // console.log(present);
//     //  present.removeAttribute('class');
//     //  present.setAttribute('class', 'present')
// }

//     var time10 = document.querySelector("#time-10");
//     var getT = timeSlot.getAttribute("id").slice(5,7);
// SET UNIQUE ID TO TIME BLOCK
var testa = document.querySelector('test02').value
console.log(testa);
// LINK TIME WITH TIME BLOCK ID

// SET 

// SET 

// WANT TIME BLOCK TO CHANGE WHEN TIME ON PRESENT TIME

// 
/*

// FUTURE FUNCTION

// CREATE TIMEBLOCK VARIABLES 
//var am8 = document.querySelector('work8').value;
//console.log(am8);
var am9 = 09;
var am10 = 10;
var am11 = 11;
var pm12 = 12;
var pm1 = 01;
var pm2 = 02;
var pm3 = 03;
var pm4 = 04;
var pm5 = 05;
var pm6 = 06;

// IF ELSE TO CHECK IF CURRENT / PAST / FUTURE
//--------- 8AM
if (am8 == currentHour){
    presetChange();
    
}
else if (am8 < currentHour){
    // pastChange()
} 
else if (am8 > currentHour){
    // futureChange()
}

//---------- 9AM
if (am9 == currentHour){
    presetChange();
}
else if (am9 < currentHour){
    // pastChange()
} 
else if (am9 > currentHour){
    // futureChange()
}
//--------- 10AM
if (am10 == currentHour){
    presetChange();
}
else if (am10 < currentHour){
    // pastChange()
} 
else if (am10 > currentHour){
    // futureChange()
}
//--------- 11AM
if (am11 == currentHour){
    presetChange();
}
else if (am11 < currentHour){
    // pastChange()
} 
else if (am11 > currentHour){
    // futureChange()
}
//--------- 12PM
if (pm12 == currentHour){
    presetChange();
}
else if (pm12 < currentHour){
    // pastChange()
} 
else if (pm12 > currentHour){
    // futureChange()
}
//--------- 1PM
if (pm1 == currentHour){
    presetChange();
}
else if (pm1 < currentHour){
    // pastChange()
} 
else if (pm1 > currentHour){
    // futureChange()
}
//--------- 2PM
if (pm2 == currentHour){
    presetChange();
}
else if (pm2 < currentHour){
    // pastChange()
} 
else if (pm2 > currentHour){
    // futureChange()
}
//--------- 3PM
if (pm3 == currentHour){
    presetChange();
    console.log('present');
}
else if (pm3 < currentHour){
    // pastChange()
} 
else if (pm3 > currentHour){
    // futureChange()
}
//--------- 4PM
if (pm4 == currentHour){
    presetChange();

}
else if (pm4 < currentHour){
    // pastChange()
} 
else if (pm4 > currentHour){
    // futureChange()
    console.log('futru');
}
//--------- 5PM
if (pm5 == currentHour){
    presetChange();
}
else if (pm5 < currentHour){
    // pastChange()
} 
else if (pm5 > currentHour){
    // futureChange()
}
//--------- 6PM
if (pm6 == currentHour){
    presetChange();
}
else if (pm6 < currentHour){
    // pastChange()
} 
else if (pm6 > currentHour){
    // futureChange()
}



















// TRIED USING DEFAULT ELSE INSTEAD AT THE END, BUT IT CAUSED ERRORS FOR MY RESULTS
/*
if (hour2 < currentHour) {
     console.log('past');
 } else if (hour2 == currentHour) {
     console.log('present');
 } else (hour2 > currentHour){
     console.log('future');
 }
*/









//  get time block
//  var time12 = time12.
//  var getT = timeSlot.getAttribute("id").slice(5,7);

// var hourSlot = timeSlot.getAttribute("id")

//  get id from time block

//  slice to convert to number

//  for loop to do the same on each slot

//  this to get result? then compare to time



//  had to scrap running through a for loop because i kept getting errors with adding getattribut() in the loop. 
//  so i caved and did if else for each number
// function timeFunc(){
// // GET TIME
// var m = moment();
// // CONVERT TO HOURS
// var currentHour = m.format('HH')
// console.log(currentHour);
// var timeSlot = document.querySelectorAll(".check-time");
// for(var i = 0; i < timeSlot.length; i++) {
//     var time10 = document.querySelector("#time-10");
//     var getT = timeSlot.getAttribute("id").slice(5,7);
//     console.log(getT);
// }






























// --------------- task section ---------------------
// Dynamically created div to hold buttons
var colorBox = document.createElement('div');
colorBox.setAttribute('class', 'colorchoice');
// created buttons
var taskRed = document.createElement('button');
// ---set id for css
taskRed.setAttribute('id', 'red;');
// ---set color of button
taskRed.setAttribute('class', 'btn-red')
// ---set type so page won't refresh when clicking on the button
taskRed.setAttribute('type', 'button');
// ---add the function for the box to change to desired color
taskRed.setAttribute('onclick', 'turnItRed()');


var taskPurple = document.createElement('button');
taskPurple.setAttribute('id', 'purple;');
taskPurple.setAttribute('class', 'btn-purple')
taskPurple.setAttribute('type', 'button');
taskPurple.setAttribute('onclick', 'turnItPurple()');

var taskGreen = document.createElement('button');
taskGreen.setAttribute('id', 'green;');
taskGreen.setAttribute('class', 'btn-green')
taskGreen.setAttribute('type', 'button');
taskGreen.setAttribute('onclick', 'turnItGreen()');

var taskBlue = document.createElement('button');
taskBlue.setAttribute('id', 'blue;');
taskBlue.setAttribute('class', 'btn-blue')
taskBlue.setAttribute('type', 'button');
taskBlue.setAttribute('onclick', 'turnItBlue()');

// functions to turn background color for tasks
function showChoices () {
    //window.alert('yessss')
    // show buttons on page
    colorBox.appendChild(taskRed);
    colorBox.appendChild(taskPurple);
    colorBox.appendChild(taskGreen);
    document.querySelector('.colorchoice').appendChild(colorBox)
}
function turnItRed () {
    var redIt = document.querySelector('.event-color');
    redIt.setAttribute('id', 'red');
}
function turnItPurple() {
    var purpleIt = document.querySelector('.event-color');
    purpleIt.setAttribute('id', 'purple');
}
function turnItGreen() {
    var greenIt = document.querySelector('.event-color');
    greenIt.setAttribute('id', 'green');
}
// event listeners for color choices
taskRed.addEventListener('click', turnItRed)
taskPurple.addEventListener('click', turnItPurple)
taskBlue.addEventListener('click', turnItGreen)

// remove default text on click in textarea

// get color to set for specific time slot