class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB ,
            stiffness: 0.04,
            length: 10
        }
    
        this.slingshot = Constraint.create(options);
        this.pointB = pointB
        this.bodyA = bodyA
        World.add(world,this.slingshot);
    }

    attach(){
        this.slingshot.bodyA = polygon;
    }

    fly(){
        this.slingshot.bodyA = null;
    }
    display(){
       if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}