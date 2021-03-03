class Chain {
      
   constructor(bodyA, bodyB, offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB :{x:this.offsetX,y:this.offsetY}
        }
            //stiffness: 0.04,
            //length: 10
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("blue")
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y+this.offsetY);
    }
    
}