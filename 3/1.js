var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        return this.num1 + this.num2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.num1 - this.num2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.num1 * this.num2;
    };
    Arithmetic.prototype.Division = function () {
        return this.num1 / this.num2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 5);
console.log("Addition" + obj1.Addition());
console.log("Subtraction" + obj1.Subtraction());
console.log("Multiplication" + obj1.Multiplication());
console.log("Division" + obj1.Division());
var obj2 = new Arithmetic(40, 20);
console.log("Addition" + obj2.Addition());
console.log("Subtraction" + obj2.Subtraction());
console.log("Multiplication" + obj2.Multiplication());
console.log("Division" + obj2.Division());
