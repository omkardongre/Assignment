function checkPrime(n:number):boolean {
    var i:number;
    for (i=2;i<n;i++) {
        if(n%i==0) {
            return false;
        }
    }
    return true;
}

var isPrime:boolean=checkPrime(13);
if(isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}


/*
output :
Prime
*/
