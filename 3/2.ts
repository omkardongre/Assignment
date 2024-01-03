class Circle {
    radius: number;
    pi: number;
    constructor(r: number) {
        this.radius = r;
        this.pi = 3.14;
    }
    Area(): number {
        return this.pi * this.radius * this.radius;
    }
}

var obj1 = new Circle(10);
console.log("Area of circle is " + obj1.Area());

var obj2 = new Circle(20);
console.log("Area of circle is " + obj2.Area());

/*
output :
Area of circle is 314
Area of circle is 1256
*/
