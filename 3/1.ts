class Arithmetic {

    num1:number;
    num2:number;

    constructor(a:number,b:number){
        this.num1=a;
        this.num2=b
    }
    Addition() : number{
        return this.num1+this.num2;
    }
    Subtraction() : number{
        return this.num1-this.num2;
    }
    Multiplication() : number{
        return this.num1*this.num2;
    }
    Division() : number{
        return this.num1/this.num2;
    }
    
}

var obj1 = new Arithmetic(10,5);
console.log("Addition"+obj1.Addition());
console.log("Subtraction"+obj1.Subtraction());
console.log("Multiplication"+obj1.Multiplication());
console.log("Division"+obj1.Division());

var obj2 = new Arithmetic(40,20);
console.log("Addition"+obj2.Addition());
console.log("Subtraction"+obj2.Subtraction());
console.log("Multiplication"+obj2.Multiplication());
console.log("Division"+obj2.Division());


/*
output :
Addition15
Subtraction5
Multiplication50
Division2
Addition60
Subtraction20
Multiplication800
Division2
*/
