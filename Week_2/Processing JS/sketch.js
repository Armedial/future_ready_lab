
//setup is run once at the beginning before we draw
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //Red Circle
    xSpeed: 5,
    ySpeed: 5
}

function setup() {
  createCanvas(640, 480);
    background(20,55,76); //background color
    frameRate(500);
}

function draw() {
  fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    if(circle.xCoor > 640 || circle.xCoor < 0){                      //if x goes out of the canvas
        circle.color = [random(0,255),random(0,255),random(0,255)]   //change circle color
        circle.xSpeed = -circle.xSpeed;                              //change circle direction
        circle.diameter = random(20,80);                             //change circle size
    } else if(circle.yCoor > 480 || circle.yCoor < 0){               //if y goes out of canvas
        circle.color = [random(0,255),random(0,255),random(0,255)];  //change circle color
        circle.ySpeed = -circle.ySpeed;                              //change circle direction
        circle.diameter = random(20,80);                             //change circle size
        
    } else {
        circle.xSpeed = circle.xSpeed;
        circle.ySpeed = circle.ySpeed;
    }
    
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}
