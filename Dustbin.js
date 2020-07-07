class Box {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("dustbin.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
      
        //rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("green");
        //rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }
    }