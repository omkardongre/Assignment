function Sum(arr:number[]):number{
    let i:number, sum:number=0;
    for(i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    return sum
}

var arr:number[] = [1,3,4,6,2];
var sum:number=Sum(arr);
console.log("Addition is " +sum)


/*
output :
Addition is 16
*/
