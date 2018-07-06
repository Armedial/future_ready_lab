
    //setup is run once at the beginning before we draw
    /*var circle = {
        diameter: 80,
        xCoor: 0,
        yCoor: 0,
        color: [255,0,0], //Red Circle
        xSpeed: 5,
        ySpeed: 5
    }
    */
   function setup() {
    canvas = createCanvas(prompt("Enter width of canvas: "),prompt("Enter height of canvas: "));
    frameRate(15);
    makeCircle();
}
//random color
function randomColor(){
    return [random(0,255), random(0,255), random(0,255)];
}
//circle variables
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color; //black default
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}
var circleList = [];


function makeCircle(){
    var balls = random([2,5,9,16]);
    for (var b = 0; b < balls; b++){ //make circles
        circleList.push(new Circle(random(width),random(height),50, [random(255),random(255),random(255)],random(10,30),random(10,30)));
    }
}

function draw(){
    background(20,55,76);
    for (var i = 0; i < circleList.length; i++){// make the canvas and circles
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        for(var x = 0; x < circleList.length; x++){
            var dx = circleList[i].xCoor - circleList[x].xCoor;
            var dy = circleList[i].yCoor - circleList[x].yCoor;
          
        }
        
        if (circleList[i].xCoor > width || circleList[i].xCoor < 0){ //change circle properties if touch x border
            circleList[i].color = randomColor(); 
            circleList[i].xSpeed = -circleList[i].xSpeed; 
            circleList[i].diameter = random(20,70); 
        }
        if (circleList[i].yCoor > height || circleList[i].yCoor < 0){ //change circle properties if touch y border
            circleList[i].color = randomColor();
            circleList[i].ySpeed = -circleList[i].ySpeed;
            circleList[i].diameter = random(20,70);
        }
        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}