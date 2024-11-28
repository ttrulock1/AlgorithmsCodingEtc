var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
    console.log(i);
  }
  for (let i = 0; i < nums.length; i++) {
    const secIndex = map.get(target - nums[i]);
    if (secIndex && secIndex != i) {
      return [i, secIndex];
    }
  }
};
