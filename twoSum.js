/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 1. go through the whole array
    // 2. pick the first value
    // 3. go through remaining array
    // 4. if the remaining array value + first value === target, return the index of the first value and the index of the remaining array value
    // 5. if the remaining array value + first value !== target, go to step 2
  
    for (let i=0; i < nums.length; i++) {
        for (let j=i + 1; j < nums.length; j++) {
         if(nums[i] + nums[j] === target)
             return [i, j]
        }

    }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 1. go through the whole array
    // 2. pick the first value
    // 3. go through remaining array
    // 4. check if there is a value that will give me the answer

};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 1. go through the whole array
    // 2. pick the first value
    // 3. go through remaining array
    // 4. check if there is a value that will give me the answer
  
    
    const previousValues = new Map()

           for (let i = 0; i < nums.length; i ++) {
               const currentNumber = nums[i]
               const neededValue = target - currentNumber
               const index2 = previousValues[neededValue]
               console.log(previousValues)

               if (index2 != null) {
               return [index2, i]
           } else {
               previousValues[currentNumber] = i
       }
   
   }
};