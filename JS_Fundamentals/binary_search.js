function binary_search(arr,num){
    //find the middle value... basically splitting array in half
    //returns the value of x rounded down to its nearest integer: math.floor
    var mid = Math.floor(arr.length/2); 
    console.log(arr[mid], num);

// if that mid value ==  to the number you guessed.. console log "match"
    if (arr[mid] === num){
        console.log('match', arr[mid], num);
        return arr[mid];
    }
    else if (arr[mid] < num && arr.length > 1){
        console.log('mid lower', arr[mid], num);
        //remove item from array w/ splice
        return binary_search(arr.splice(mid, Number.MAX_VALUE), num);   
    }
    else if (arr[mid] > num && arr.length > 1) {
        console.log('mid higher', arr[mid], num);
        //remove item from array w/ splice
        return binary_search(arr.splice(0, mid), num);
    }
    else {
        console.log('not here', num);
        return -1;
    }

}
console.log(binary_search([1,3,7,13,40,66,89,99], 13))