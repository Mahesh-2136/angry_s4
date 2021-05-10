class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.s1 = loadImage("sprites/sling1.png")
        this.s2 = loadImage("sprites/sling2.png")
        this.s3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.s1 , 200, 30);
        image(this.s2 , 170 , 28)
       

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x - 30, pointA.y, pointB.x, pointB.y);
            
            image(this.s3 , this.sling.bodyA.position.x - 30 , 
            this.sling.bodyA.position.y -10 , 20 , 40)
        }

        if (this.sling.bodyA.position.x < 190){
            this.s3.position.x = this.sling.bodyA.position.x + 30
        }
       
    }
    
}