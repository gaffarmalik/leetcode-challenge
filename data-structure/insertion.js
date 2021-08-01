// var arr = [1, 90, 345, 67, 23, 2, 4, 5, 7, 8, 9, 10];
// var gIndex = 0;
// var sorted = [arr[0]];
// let len = arr.length;

// for (let i = 1, j = 0; i < len; i++) {
//     j = sorted.length;
//     while (j > 0) {
//         if (arr[i] < sorted[j - 1]) gIndex = j - 1;
//         j--;
//     }
//     if (gIndex == 0) sorted.push(arr[i]);
//     else sorted.splice(gIndex, 0, arr[i]);

// }



var arr = [1, 90, 345, 67, 23, 2, 4, 5, 7, 8, 9, 10];
var gIndex = 0;
let len = arr.length;

for (let i = 1; i < len; i++) {
    for(let j=i; j > 0; j--){
        if(arr[j] < arr[j-1]){
            //swap
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
        else {
            break;
        }
    }
}

console.log(arr)
