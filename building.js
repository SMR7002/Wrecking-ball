class Building{
    constructor(x,y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':0.2,
            'density':0.04
        }
        this.body = Bodies.rectangle(x, y, width, height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow")
        stroke("red")
        rect(0,0, this.width, this.height);
        pop();
    }


}