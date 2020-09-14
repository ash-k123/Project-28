class Mango {
    constructor(x,y,radius){
        var options ={
            isStatic: true
        }
     this.body = Bodies.circle(x,y,radius,options);
     this.image = loadImage("sprites/mango.png");
     World.add(world,this.body);
    }
    display(){
       var manPos = this.body.position;
       push();
       translate(manPos.x,manPos.y);
       imageMode(CENTER);
       ellipseMode(RADIUS);
       image(this.image,0,0,this.r*2,this.r*2);
       pop();
    }
 }