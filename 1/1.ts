function largestOfThree(n1:number,n2:number,n3:number):number
{
    if(n1>n2 && n1>n3)
    {
        return n1;
    }
    else if(n2>n3)
    {
        return n2;
    }
    else
    {
        return n3;
    }
}

var num:number = largestOfThree(23,89,6);
console.log("Largest Number is : "+num);


/*
output :
Largest Number is : 89
*/
