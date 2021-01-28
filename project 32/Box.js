class Box{
    constructor(x, y, width, height,color) {
        var options = {
            'restitution':0.8,
            'density':0.01,
            'friction':0,
            isStatic:false
        }
        this.visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color

        World.add(world, this.body);
      }

      display(){
        if(this.body.speed <2.7){
          var angle = this.body.angle;
          var pos = this.body.position
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          fill(this.color)
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
          World.remove(world,this.body)
          push();
          this.visibility = this.visibilty -0.1
          pop();
      }
      }

      score(){
        if(this.visibility<0 && this.visibility >-150){
    score++;
        }
      }

    }
