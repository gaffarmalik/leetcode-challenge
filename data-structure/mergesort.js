var arr = [1,4,2,8,345,123,43,32     ,5643,63,123,43,2,55,1,234,92];
let times = 0;
//Using Divide and Conquer from the middle of array with non-recursive (Bottom Up)

function mergeSort(arr){
    var left = [];
    var right = [];
    let len = arr.length;
    times++;
    if(len <= 1) return arr;
    let middle = Math.floor(len/2);
    left = arr.slice(0, middle);
    right = arr.slice(middle);  //--> To the End
    
    return merge(mergeSort(left), mergeSort(right));  
}


function merge(left, right){
    var output = [];
    let leftCount = 0;
    let rightCount = 0;
    while(leftCount < left.length && rightCount < right.length){
            if(left[leftCount] < right[rightCount]){
                output.push(left[leftCount]);
                leftCount++;

            }
            else{
                output.push(right[rightCount]);
                            rightCount++;

            }
            
        }

return [...output, ...left.slice(leftCount), ...right.slice(rightCount)]
  
}

let ans = mergeSort(arr);
console.log(ans)
