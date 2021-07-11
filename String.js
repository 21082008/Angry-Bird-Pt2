class String{
    constructor(body1,body2) {
        var options = {
          bodyA:body1,
          bodyB:body2,
          length:10,
          stiffness:0.9
        }
       // this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.height = height;
        //this.image = loadImage("sprites/base.png");
        this.string=Constraint.create(options)
        World.add(world, this.string);
      }
      display(){
        var point1=this.string.bodyA.position;
        var point2=this.string.bodyB.position;
        stroke("white");
        strokeWeight(6);
        line (point1.x,point1.y,point2.x,point2.y)
      }
}