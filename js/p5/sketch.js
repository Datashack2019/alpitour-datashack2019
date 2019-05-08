

let angle = 0;
let angle2= 15; //rotazione quadrato
var my_canvas = function(p){

  p.setup = function() {
    var canvas = p.createCanvas(600,600, p.WEBGL);
    canvas.parent('sphere');

  }

 p.draw = function() {
   p.background(255,0,0,0);
   p.push();
   // Cubo che gira
   p.stroke('blue');
   p.strokeWeight(1.5);
   p.noFill();
   p.rotateY(p.frameCount/500);
   p.rotateX(p.mouseY/50);
   p.sphere(200);
   p.angle += 0.005;
   p.pop();


  }

}
var my_sketch = new p5(my_canvas);
