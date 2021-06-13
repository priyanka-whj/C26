class Box
{
    constructor(x, y, width, height)
    {
        var options = {'restitution': 1.0};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(myWorld, this.body);
    }
    display()
    {
        push(); 

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        rect(0, 0, this.bodyW, this.bodyH);

        pop(); 
    }
};