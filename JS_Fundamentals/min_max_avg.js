function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var total = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        total = total + arr[i];
    }
    console.log("The minimum is "+min+", the maximum is "+max+", and the average is "+total/arr.length+".");
    return "The minimum is "+min+", the maximum is "+max+", and the average is "+total/arr.length+".";
}
maxMinAvg([1,-2,9,4])

// using the math library 
// function maxMinAvg(arr){
//     console.log(Math.max(1,-2,9,4))
//     console.log(Math.min(1,-2,9,4))
// }
// maxMinAvg()