// Team PictureFrame (Liam Kronman, Jonathan Lee)
// SoftDev pd1
// K25 -- Implementing responsive rectangle and circle drawing in canvas element using JS
// 2021-05-05
// --------------------------------------------------

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var mode = "rect";
const size = 20;

//var toggleMode = function(e) {
var toggleMode = (e) => {
  console.log("toggling...");

  // YOUR BRILLIANT CODE HERE
  if (mode === "rect") {
      mode = "dot";
  } else {
      mode = "rect";
  }
}


//var drawRect = function(e) {
var drawRect = (e) => {
  console.log("drawing rectangle...");

  // YOUR BRILLIANT CODE HERE...
  // to capture coords of mouseclick
  console.log("mouse xy: " + e.clientX + " " + e.clientY);
  // and draw a rectangle there
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.rect(e.clientX - size, e.clientY - size, size, size);
  ctx.stroke();
}


//var drawCircle = function(e) {
var drawCircle = (e) => {
  console.log("drawing circle...");

  // YOUR BRILLIANT CODE HERE...
  // to capture coords of mouseclick
  console.log("mouse xy: " + e.clientX + " " + e.clientY);
  // and draw a rectangle there
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.arc(e.clientX - (size / 2), e.clientY - (size / 2), size, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  // USEFUL...
  // beginPath()
  // arc()
  // stroke();
  // fill();
  
}


//var draw = function(e) {
var draw = (e) => {
  console.log("draw")

  // YOUR BRILLIANT CODE HERE...
  // ... to condtionally draw rect or circle
  if (mode === "rect") {
      drawRect(e);
  } else {
      drawCircle(e);
  }
}


//var wipeCanvas = function() {
var wipeCanvas = () => {
  console.log("wiping canvas...")

  // YOUR BRILLIANT CODE HERE...
  ctx.clearRect(0,0,c.width,c.height);
  console.log("ET VIOLA.  eh?")
}


// YOUR BRILLIANT CODE HERE...
// ...to add an event listener to the canvas, and call the appropriate fxn
c.addEventListener("mousedown", draw);

// ...to add an event listener to the toggle button, and call the appropriate fxn
document.getElementById("toggle-btn").addEventListener("click", toggleMode);

// ...to add an event listener to the clear button, and call the appropriate fxn
document.getElementById("clear-btn").addEventListener("click", wipeCanvas);