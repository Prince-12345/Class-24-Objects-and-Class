class Bird{

    constructor(x,y){
    
    var Bird_option={
        restitution:0.8,
        density:0.5,
        friction:0.8
    
    }
    
    
    this.body=Bodies.rectangle(x,y,50,50,Bird_option);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    
    
    }
    display(){
    var pos=this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    strokeWeight(2);
    stroke("green");
    rectMode(CENTER);
    fill("lightGreen");
    rect(0,0,this.width,this.height);
    pop();

    }
    
    }