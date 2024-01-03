function Sum(arr) {
    var i, sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var arr = [1, 3, 4, 6, 2];
var sum = Sum(arr);
console.log("Addition is " + sum);
