class Log{

constructor(x,y,height,angle){
var option={
restitution:1,
friction:1.5,
density:0.5
}
this.body=Bodies.rectangle(x,y,20,height,option);
this.width=20;
this.height=height;

Matter.Body.setAngle(this.body,angle);

World.add(world,this.body);
}
display(){

    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    strokeWeight(2);
    stroke("green");
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();



}

}