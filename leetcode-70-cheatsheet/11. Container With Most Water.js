/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;

    while(left < right){
        let distance = right - left;
        let tempMax = distance * Math.min(height[left], height[right]);
        max = Math.max(tempMax, max);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }

    return max;
};