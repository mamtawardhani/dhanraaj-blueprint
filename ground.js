class Ground{

constructor(x,y){
var option = {isStatic:true}
this.a = Bodies.rectangle(x,y,400,20, option)
World.add(world,this.a )
}


display(){
    rectMode(CENTER)
    rect(this.a.position.x, this.a.position.y, 400,20)
}




}