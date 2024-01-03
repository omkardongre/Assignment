function factorsOfNumber(n:number):void {
    var i:number;
    for (i=1;i<n;i++) {
        if(n%i==0) {
            console.log(i);
        }
    }
}

factorsOfNumber(20);



/*
output :
1
2
4
5
10
*/
