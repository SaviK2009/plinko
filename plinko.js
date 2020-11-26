class Plinko {
    constructor(x, y,radius) {
      var options = {
        isStatic:false
      }
      this.body = Bodies.circle(x, y, width, height, options);
      this.radius=10
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      push()
      fill(255);
      ellipse(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };