var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    
    while(left < right){
        let smallerHeight = Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, smallerHeight * (right - left))
        if(height[left] < height[right]) {left++}
        else if(height[right] < height[left]) {right--}
        else{
            left++;
            right--;
        }
    }
    
    return maxArea
};