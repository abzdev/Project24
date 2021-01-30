class Hammer {   
    constructor(x,y,width,height) {
        var options = {
            density: 2,
            friction: 1.0,
            restitution: 0.5
        }
        this.hammer = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.hammer);
    }
    display() {
        this.hammer.position.x = mouseX;
        this.hammer.position.y = mouseY;
        rect(this.hammer.position.x,this.hammer.position.y,this.width,this.height);
        
    }
}