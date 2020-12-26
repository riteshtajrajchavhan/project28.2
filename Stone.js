class Stone {
constructor(x,y,r){

var options= {
  'restitution':0.8,
   'friction':1.0,
      'density':1.0
  
}

this.x=x;
this.y=y;
this.r=r;
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
this.image = loadImage("stone.png");
World.add(world,this.body);

}






display(){

var pos=this.body.position
//pos.x=mouseX;
// pos.y=mouseY;
push();
translate(pos.x,pos.y);
imageMode(CENTER);

fill(255,0,255);
image(this.image,0,0,this.r,this.r);
pop();

}











}