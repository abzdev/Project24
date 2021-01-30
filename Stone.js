class Stone {
    constructor(x,y,width,height) {
        var options = {
            restitution: 0.1,
            friction: 3,
            density: 5
        }
        this.stone = Bodies.rectangle(x,y,width,height);
        
        this.width = width;
        this.height = height;

        World.add(world,this.stone);

    }
    display() {
        rect(this.stone.position.x,this.stone.position.y,this.width,this.height);
    }
}