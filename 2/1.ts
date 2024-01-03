function Maximum(arr:number[]):number{
    let i:number=0 ,max:number=arr[0];
    for(i=1;i<arr.length;i++) {
        if(max<arr[i])
            max=arr[i];
    }
    return max
}

var arr:number[] = [10,30,50,40,60,20];
var maxvalue:number=Maximum(arr);
console.log("Maximum number is " +maxvalue)


/*
output :
Maximum number is 60
*/
