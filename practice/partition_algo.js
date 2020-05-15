let x =[5,4,9,2,6,3]
function partition(arr){
    let pivot = arr.length-1;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > arr[pivot]){
            if(i<pivot){
                var temp = arr[pivot];
                arr[pivot] = arr[pivot-1];
                arr[pivot-1] = temp;
                var temp2 = arr[i];
                arr[i] = arr[pivot];
                arr[pivot] = temp2;
                pivot = pivot-1;
                if(arr[i] > arr[pivot]){
                    i--
                }
            }
        }
    }
    return arr
}
values = [2,9,3,4,6,5]
indexs = [0,1,2,3,4,5]
i=1
pivot=3
console.log(partition(x))


// x = [1,2,5,7,9]
// y = [2,3,4,6,7]
// function combine(arr1, arr2){
//         for(let i=0; i <arr2.length; i++){
//             let currentVal = arr2[i]
//             arr1.push(currentVal)
//             // console.log(arr1)
//             for(let j=1; j<arr1.length; j++){
//                 let prev = j-1
//                 let temp = arr1[j]
//                 while(prev >= 0 && arr1[prev]  > temp){
//                     arr1[prev + 1] = arr1[prev]
//                     prev-- 
//                 }
//                 arr1[prev + 1] = temp
//             }
//         }return arr1
//     }
    