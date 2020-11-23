class Box{

constructor(x,y,width,height){

var Box_option={
    restitution:0.8,
    density:0.5,
    friction:0.8
    

}


this.body=Bodies.rectangle(x,y,width,height,Box_option);
this.width=width;
this.height=height;
World.add(world,this.body);


}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
angleMode(RADIANS);
strokeWeight(4);
stroke("green");
rectMode(CENTER);

fill("skyblue");
rect(0,0,this.width,this.height);
pop();
}

}