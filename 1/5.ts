function fib(n:number):void {
    var a:number=0;
    var b:number=1;

    while(b<=n) {
        console.log(b);
        var c:number=a+b;
        a=b;
        b=c;
    }
}

fib(21);

/*
output :
1
1
2
3
5
8
13
21
*/
