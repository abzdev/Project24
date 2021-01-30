class Plane {   
    constructor(x,y,width,height) {
        var options = {
            'density': 2,
            'friction': 1.0,
            'isStatic': true,
            'restitution': 0.5
        }
        this.plane = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.plane);
    }
    display() {
        
        rect(this.plane.position.x,this.plane.position.y,this.width,this.height);
    }
}