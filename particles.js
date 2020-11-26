class Particles {
    constructor(x, y,radius) {
      var options = {
        restitution:0.4
      }
      this.body = Bodies.circle(x, y, width, height, options);
      this.color=color(random(0, 255),random(0, 255))
      this.radius=radius
      
      World.add(world, this.body);
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.width, this.height);
        pop()
    }
  };