class Log {
  constructor(x, y,height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 150, height, options);
    this.width = 150;
    this.height = height;
    this.image = loadImage("boy.png");
   
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
   
    imageMode(CENTER);
    fill("black");
   
    
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
