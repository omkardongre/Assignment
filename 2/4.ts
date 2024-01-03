let ChkArmstring = (num) => {
    let i:number=num,count:number=0, ams:number=0;
    
    count=num.toString().length;

    i=num;
    while(i) {
        let t=i%10;
        ams += Math.pow(t, count);
        i=Math.floor(i/10);
    }

    return ams==num;

}

let ifAms=ChkArmstring(153);

if(ifAms==true) {
    console.log("Number is Armstrong");
} else {
    console.log("Number is not Armstrong");
}
/*
output :
Number is not Armstrong
*/
