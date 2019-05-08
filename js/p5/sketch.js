var my_canvas = function(p){

  p.setup= function() {
    var canvas=p.createCanvas(500,500);
    ppcanvas.parent('sphere');
    // put setup code here
  }

 p.draw = function() {
    fill(red);
    ellipse(width/2,height/2, 50);
    // put drawing code here
  }

}
var my_sketch = new p5(my_canvas);
