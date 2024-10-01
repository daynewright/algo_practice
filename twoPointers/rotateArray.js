const rotateArray = (nums, k) => {
  const rotations = k % nums.length;

  if (!rotations) {
    return nums;
  }

  console.log({ rotations });
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
