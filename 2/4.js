var ChkArmstring = function (num) {
    var i = num, count = 0, ams = 0;
    while (i) {
        count++;
        i = Math.floor(i / 10);
    }
    i = num;
    while (i) {
        var t = i % 10;
        ams += Math.pow(t, count);
        i = Math.floor(i / 10);
    }
    if (ams == num)
        return true;
    return false;
};
var ifAms = ChkArmstring(1253);
if (ifAms == true) {
    console.log("Number is Armstrong");
}
else {
    console.log("Number is not Armstrong");
}
