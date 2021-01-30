class Sand {
    constructor(x,y,r) {
        var options = {
            density: 1,
            friction: 5,
            restitution: 0.9
        }
        this.sand = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.sand);
    }
    display() {
        circle(this.sand.position.x,this.sand.position.y,this.r*2);
    }
}