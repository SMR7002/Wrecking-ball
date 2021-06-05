class Ball{
    constructor(x, y,radius) {
        var options = {
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
  }
  display(){
    var pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red")
    ellipseMode(RADIUS)
    ellipse(0, 0, this.radius, this.radius)
    pop();

  }
}