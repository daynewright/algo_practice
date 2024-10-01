//  Given a sorted array of integers nums,
// determine if there exists a pair of numbers that sum to a given target.

const findPairs = (arrNums, target) => {
  let leftPointer = 0;
  let rightPointer = arrNums.length - 1;

  while (leftPointer < rightPointer) {
    // IF sum is > target, THEN right - 1
    const sum = arrNums[leftPointer] + arrNums[rightPointer];

    if (sum === target) {
      return [arrNums[leftPointer], arrNums[rightPointer]];
    } else if (sum > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return null;
};

console.log(findPairs([1, 3, 4, 6, 8, 10, 13], 13)); // [3, 10]
console.log(findPairs([1, 3, 4, 6, 8, 10, 13], 8)); // null

console.log(findPairs([1, 3, 4, 5, 6, 10, 25], 6)); // [1, 5]
