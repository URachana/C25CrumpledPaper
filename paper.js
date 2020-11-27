class crumpledPaper{

    constructor(x,y,r) {

        var options={

            restitution : 0.3,
            friction : 0,
            density: 2,
            isStatic: false
        }

        this.body= Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
        this.image=loadImage("sprites/paper.png");
        this.r= r 
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipseMode(CENTER);
        //fill("yellow");
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,50,50);

        pop();
    }


}