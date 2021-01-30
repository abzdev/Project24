class Rubber {
    constructor(x,y,r) {
        var options = {
            density: 1,
            friction: 5,
            restitution: 0.3
        }
        this.rubber = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.rubber);
    }
    display() {
        circle(this.rubber.position.x,this.rubber.position.y,this.r*2);
    }
}