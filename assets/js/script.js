var m = moment();
var monday = document.querySelector(".mon")
var showCurrentDay = document.querySelector('#currentDay');
var showDate = m.format('dddd MMM Mo YYYY')
console.log(showDate);
console.log(moment);

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