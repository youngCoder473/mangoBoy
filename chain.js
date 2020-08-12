class Chain{
   
    constructor(bodyA,bodyB){
        var options={
           bodyA:bodyA,
           bodyB:bodyB,
           length:6,
           stiffness:0.01
        }
        
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
        
    }
    display(){
        if(this.constraint.bodyA!=null){
        push();
        stroke("white");
        strokeWeight(3);
        //console.log(this.constraint);
        var posA=this.constraint.bodyA.position;
        var posB=this.constraint.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    fly(){
        console.log("fly")
        this.constraint.bodyA=null
    }
    
}
