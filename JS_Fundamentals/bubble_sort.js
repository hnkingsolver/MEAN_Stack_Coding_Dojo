// It's called Bubble Sort because we can imagine we are sliding a bubble along the array. 

// The bubble encompasses two neighboring values. 
// If the larger number is to the left, we swap those values. 
// Then we slide the bubble over one position. 
// Once the bubble reaches the end of the array, we know that the largest value is in its proper position. 
// We can then repeat the process for all the values except for the last value, since we know that it is already in place. 
// And then we'll do it again, and again, and again, until we know all values are in their proper positions.

var array = [6,2,3,7,5,4,1];
function bubbleSort(arr) {
    for(j=0;j<arr.length;j++) {
        for(i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }      
    return arr;
}
console.log(bubbleSort(array));

//Classify each of the following functions according to their Big O Time complexity:
//#1
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//O(n)

//#2
function findNth(arr, n){
    console.log(arr[n]);
}
//O(1)

//#3
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
//O(n)

//#4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
//O(n2)