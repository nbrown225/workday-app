var m = moment();
var monday = document.querySelector(".mon")
var showCurrentDay = document.querySelector('#currentDay');
var showDate = m.format('dddd MMM Mo YYYY')
console.log(showDate);
console.log(moment);

// Dynamically created div to hold buttons
var colorBox = document.createElement('div');
colorBox.setAttribute('class', 'colorchoice');
// created buttons
var taskRed = document.createElement('button');
// ---set id for css
taskRed.setAttribute('id', 'red;');
// ---set type so page won't refresh when clicking on the button
taskRed.setAttribute('type', 'button');
// ---add the function for the box to change to desired color
taskRed.setAttribute('onclick', 'turnItRed()');


var taskPurple = document.createElement('button');
taskPurple.setAttribute('id', 'purple;');
taskPurple.setAttribute('type', 'button');
taskPurple.setAttribute('onclick', 'turnItPurple()');
var taskGreen = document.createElement('button');
taskGreen.setAttribute('id', 'green;');
taskGreen.setAttribute('type', 'button');
taskGreen.setAttribute('onclick', 'turnItGreen()');
var taskBlue = document.createElement('button');
taskBlue.setAttribute('id', 'blue;');
taskBlue.setAttribute('type', 'button');
taskBlue.setAttribute('onclick', 'turnItBlue()');

// functions to turn background color for tasks
function showChoices () {
    //window.alert('yessss')
    // show buttons on page
    colorBox.appendChild(taskRed);
    colorBox.appendChild(taskPurple);
    colorBox.appendChild(taskBlue);
    colorBox.appendChild(taskGreen);
    document.querySelector('.colorchoice').appendChild(colorBox)
}
function turnItRed () {
    var redIt = document.querySelector('.time-box');
    redIt.setAttribute('id', 'red');
}
function turnItPurple() {
    var purpleIt = document.querySelector('.time-box');
    purpleIt.setAttribute('id', 'purple');
}
function turnItBlue() {
    var blueIt = document.querySelector('.time-box');
    blueIt.setAttribute('id', 'blue');
}
function turnItGreen() {
    var greenIt = document.querySelector('.time-box');
    greenIt.setAttribute('id', 'green');
}
// event listeners for color choices
taskRed.addEventListener('click', turnItRed)
taskPurple.addEventListener('click', turnItPurple)
taskBlue.addEventListener('click', turnItBlue)
taskBlue.addEventListener('click', turnItGreen)