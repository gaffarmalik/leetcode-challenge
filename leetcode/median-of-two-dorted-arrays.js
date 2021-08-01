
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2), arr2 =[];
    let len = arr.length;
    let state = { ans:0, odd:null };
    let i=0,j=0, minIndex=0;
    state = (arr.length%2 !== 0) ? { ans:Math.floor(len/2) + 1, odd:true } : { ans: len/2 + 1, odd:false };
    const swap = (arr, left, right) => ([arr[left], arr[right]] = [arr[right], arr[left]]);

    while( i <state.ans){
      minIndex= i;
      j=i+1;
        while(j<len){
            if(arr[minIndex] > arr[j]) minIndex = j;
            j++;
        }
        
        arr2.push(arr[minIndex]);
        swap(arr,i, minIndex);
        i++;
    }
    
      let arr2_len = arr2.length;
      return (state.odd === true) ?  arr2[arr2_len-1]: (arr2[arr2_len-1] + arr2[arr2_len-2])/2;

};
