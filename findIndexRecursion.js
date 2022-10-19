function findIndex(arr, val) {
    //base case
    if (arr.length === 0) {
      return -1;
    }
    //recursive case
    //if the first element of the array is equal to the val, return the index of the element
    if (arr[0] === val) {
      return 0;
    }
    //if the last element of the array is equal to the val, return the index of the element
    if (arr[arr.length - 1] === val) {
      return arr.length - 1;
    }
    //if the first element of the array is not equal to the val, call the function again with the sliced array
    return findIndex(arr.slice(1), val);
    
  }