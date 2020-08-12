class Stone{
    constructor(x,y){
        var options={
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(y,x,20,options);
        World.add(world,this.body);
        this.image= loadImage("stone.png");
        this.r = 45;
    }
    display(){
        push();
        var pos=this.body.position;
        imageMode(CENTER);
        translate(pos.x,pos.y);
        image(this.image,0,0,20,20);
        pop();
    }

}