function Maximum(arr:number[]):number{
    let i:number=0 ,max:number=arr[0], secondmax:number=0;
    for(i=1;i<arr.length;i++) {
        if(max<arr[i]) {
            secondmax=max;
            max=arr[i];
        } else if(secondmax<arr[i]) {
            secondmax=arr[i];
        }
            
    }
    return secondmax;
}



var arr:number[] = [10,30,50,40,60,20];
var secondmaxvalue:number=Maximum(arr);
console.log("Second Maximum number is " + secondmaxvalue)


/*
output :
Second Maximum number is 50
*/
