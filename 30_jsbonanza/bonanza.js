// Team Triangular Joe -- Jonathan Lee, Eric Lo, Michelle Thaung
// SoftDev
// K30 -- Jsorcery
// 2021-05-15

//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCirc"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d"); 
ctx.fillStyle = 'red'; 

var requestID = 0;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0,0,c.width,c.height);
};

var radius = 0;
var growing = true;

var circleInfo = [];


var circlesize = 0; // for circle size

//var drawCirc = function() {
var drawCirc = (e) => {
  console.log("drawCirc invoked...")

  window.cancelAnimationFrame(requestID); // so it doesn't speed up when clicking the button multiple times

  clear(ctx);

  for (var i=0;i<circleInfo.length;i++){
    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * c.width), Math.floor(Math.random() * c.height), circlesize, 0, 2 * Math.PI);
    ctx.stroke();
    window.requestAnimationFrame(drawCirc);
    
    requestID ++

    if (growing) { // for proper bouncing
        circlesize++;
            if (circlesize >= c.width/2) {
                growing = false;
            }
    } else {
            circlesize--
            if (circlesize <= 0) {
                window.cancelAnimationFrame(requestID);
            }
    }

  }


};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );

  window.cancelAnimationFrame(requestID); // stops it 
};

var draw = (e) => {
    console.log("draw")
    drawCirc(e);

}


dotButton.addEventListener( "click", drawCirc );
stopButton.addEventListener( "click",  stopIt );
