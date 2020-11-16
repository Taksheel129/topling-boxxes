class Box{
    constructor(x,y,width,height){
        var boxoption ={
            restitution : 0.3
        }
        this.box = Bodies.rectangle(x,y,width,height,boxoption);
        this.width = width 
        this.height = height
        World.add(world,this.box);
    }
    display(){
        var pos = this.box.position
        var angle = this.box.angle
push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()

    }
}