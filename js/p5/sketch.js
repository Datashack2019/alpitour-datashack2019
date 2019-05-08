



var my_canvas = function(p){

  p.setup = function() {
    var canvas = p.createCanvas(500,500);
    canvas.parent('sphere');

  }

 p.draw = function() {
    p.fill('red');
    p.ellipse(p.mouseX,p.mouseY,100);

  }

}
var my_sketch = new p5(my_canvas);
