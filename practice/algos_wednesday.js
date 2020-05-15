function insertionSort(arr){
    //loop through arr.length
    for(var i = 1; i < arr.length; i++){
        //set position of i to current position
        var currentPosition = arr[i];
        //have nested forloop going from right to left
        for(var j = i -1; j >= 0; j--){
            //compare current position of i to arr[j]
            if (arr[j] <= currentPosition) break;
            //insert that number 
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentPosition;
    }
    return arr;
}
console.log(insertionSort([2,5,7,1,-3,10,6,9]))
console.log(insertionSort([10,9,8,7,6,5,4,3,2,1]))
