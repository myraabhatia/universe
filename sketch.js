
var sun,earth,mars,angle = 0;

function setup() {
  var canvas = createCanvas(1200,600);
  sun = new Sun(0, 0, 50);
  earth = new Planets(200,250,20);
 mars = new Planets(100,200,20);
  
}

function draw() {
  background(0);
  translate(width/2,height/2)
 push();
    rotate(angle); 
  angle = angle + 1 


  earth.display();
mars.display();
pop()
sun.display();
if(frameCount%2===0){
sun.radius = sun.radius+0.5

}

  
}