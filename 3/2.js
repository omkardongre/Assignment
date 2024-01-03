var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = r;
        this.pi = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.pi * this.radius * this.radius;
    };
    return Circle;
}());
var obj1 = new Circle(10);
console.log("Area of circle is " + obj1.Area());
var obj2 = new Circle(20);
console.log("Area of circle is " + obj2.Area());
