// Team PictureFrame (Liam Kronman, Jonathan Lee)
// SoftDev pd1
// K26 -- canvas based JS animation
// 2021-05-05w

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d"); // YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = 'red'; // YOUR CODE HERE

var requestID = 0;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")

  // YOUR CODE HERE
  ctx.clearRect(0,0,c.width,c.height);
};


var radius = 0;
var growing = true;


var circlesize = 0; // for circle size

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")

  // YOUR CODE HERE


  
  clear(ctx);
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, circlesize, 0, 2 * Math.PI);
  ctx.stroke();
  window.cancelAnimationFrame(requestID); // so it doesn't speed up when clicking the button multiple times
  window.requestAnimationFrame(drawDot);
  
  requestID ++

  if (growing) { // for proper bouncing
    circlesize++;
        if (circlesize >= c.width/2) {
            growing = false;
        }
  } else {
    circlesize --;
        if (circlesize <= 0) {
            growing = true;
        }
  }


  /*
    ...to
    Wipe the canvas,
    Repaint the circle,
    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()
   */
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );

  // YOUR CODE HERE
  window.cancelAnimationFrame(requestID); // stops it 
  /*
    ...to
    Stop the animation
    You will need
    window.cancelAnimationFrame()
  */
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );