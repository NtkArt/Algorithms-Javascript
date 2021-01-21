const bubbleSort = (nums) => {
  let swapped = false;

  do{
    swapped = false;
    for(let i=0; i < nums.length; i ++){
      if(nums[i] > nums[i+1]){
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  }while(swapped)
  return nums;
}


var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(bubbleSort(nums));