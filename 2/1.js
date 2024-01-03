function Maximum(arr) {
    var i = 0, max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
}
var arr = [10, 30, 50, 40, 60, 20];
var maxvalue = Maximum(arr);
console.log("Maximum number is " + maxvalue);
/*
output :
60
*/
