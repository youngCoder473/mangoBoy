class Mango{
    constructor(x,y){
    var options={
       isStatic:true, 
        restitution:1,
        friction:1
    }
    this.body=Bodies.circle(x,y,45,options);
    World.add(world,this.body);
    this.image=loadImage("mango.png");
    this.r = 45;
}
    display(){
        push();
        var bodyPos=this.body.position;
        var angle = this.body.angle;
       // translate(bodyPos.x,bodyPos.y);
        //rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,bodyPos.x,bodyPos.y,30,30);
        pop();
    }
}
