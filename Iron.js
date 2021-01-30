class Iron {
    constructor(x,y,width,height) {
        var options = {
            restitution: 0.1,
            friction: 3,
            density: 5
        }
        this.iron = Bodies.rectangle(x,y,width,height);
        
        this.width = width;
        this.height = height;

        World.add(world,this.iron);

    }
    display() {
        rect(this.iron.position.x,this.iron.position.y,this.width,this.height);
    }
}