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

class CircleX extends Circle {
    circumference(): number {
        return 2 * this.pi * this.radius;
    }
}

var obj1 = new CircleX(10);
console.log("Area of circle is " + obj1.Area());
console.log("Circumference of circle is " + obj1.circumference());
/*
output :
Area of circle is 314
Circumference of circle is 62.800000000000004
*/
