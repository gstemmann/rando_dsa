/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //1. start = 0 and finish = nums.length -1
    //2. start while loop til start <= finish
    //3. declare midIdx = start + finish / 2 with floor
    //4. 3 options --> target is less, greater, or equal to mididx
    //5. if statement for equals return midIdx
    //6. else if greater or less, reassign start or finish to midIdx 
    //7. if target is not in nums, return -1
    
    let start = 0
    let finish = nums.length - 1
    while (start <= finish) {
        let midIdx = Math.floor((start + finish) / 2)
        
        if(target === nums[midIdx]) {
            return midIdx
        }
        if(target < nums[midIdx]) {
            finish = midIdx - 1
        }
        if(target > nums[midIdx]) {
            start = midIdx + 1
        }
    }
    return -1
    

}