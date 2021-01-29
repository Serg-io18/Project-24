class Rubber {
    constructor(x,y,radius) {
        var options = {
            'density': 1,
            'friction': 5,
            'restitution': 0.3
        };
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }

    display() {
        var pos =this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         ellipseMode(CENTER);
         fill(255);
         strokeWeight(3);
         stroke("red")
         ellipse(0, 0, this.width, this.height);
         pop();
    }
}