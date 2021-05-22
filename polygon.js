class Polygon {

    constructor(x,y,r)
    {
        var option = {
            isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
        //polygon holder with slings 
        polygon = Bodies.circle(50,200,20);
        worldadd(world,polygon);

        slingShot = new slingShot(this.polygon,{x:100,y:200});

        }
        

        //polygon holder with slings 
         polygon = Bodies.circle(50,200,20);
        worldadd(world,polygon);

        slingShot = new slingShot(this.polygon,{x:100,y:200});
      
    
      display() {
        var pos= this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(polygon_img ,Polygon.position.x,Polygon.position.y,40,40);
        pop();
      }
    
    }

