function Maximum(arr) {
    var i = 0, max = arr[0], secondmax = 0;
    for (i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            secondmax = max;
            max = arr[i];
        }
        else if (secondmax < arr[i]) {
            secondmax = arr[i];
        }
    }
    return secondmax;
}
var arr = [10, 30, 50, 40, 60, 20];
var secondmaxvalue = Maximum(arr);
console.log("Second Maximum number is " + secondmaxvalue);
