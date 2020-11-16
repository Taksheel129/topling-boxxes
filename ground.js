class Ground{
constructor(){
    var groundoption= {
        isStatic:true
      } 
      
      
        this.ground = Bodies.rectangle(200, 390, 400, 10,groundoption);
        World.add(world,this.ground);}
display(){
    rectMode(CENTER)
    rect(this.ground.position.x,this.ground.position.y, 400, 10);
        
}

}