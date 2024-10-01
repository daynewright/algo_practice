// Description:
// You are given a sorted array of integers and a target value. Your task is to find the starting and ending position of the target value in the array.
// If the target is not found in the array, return [-1, -1].
// Example:
//	•	Input: nums = [5, 7, 7, 8, 8, 10], target = 8
//	•	Output: [3, 4]
//	•	Input: nums = [5, 7, 7, 8, 8, 10], target = 6
//	•	Output: [-1, -1]
// 	•	Input: nums = [1, 2, 3, 4, 4, 4, 5, 6], target = 4
//	•	Output: [3, 5]
// •	Input: nums = [1, 1, 2, 2, 3, 4], target = 2
//	•	Output: [2, 3]

const findStartingAndEndingPosition = (list, target) => {
  let result = [-1, -1];
  // set pointers left, right
  let left = 0;
  let right = list.length - 1;

  // find left position
  while (left <= right) {
    // set first point
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      result[0] = mid;
      right = mid - 1;
    }

    if (list[mid] > target) {
      right = mid - 1;
    }

    if (list[mid] < target) {
      left = mid + 1;
    }
  }

  left = 0;
  right = list.length - 1;
  // find left position
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      result[1] = mid;
      left = mid + 1;
    }

    if (list[mid] > target) {
      right = mid - 1;
    }

    if (list[mid] < target) {
      left = mid + 1;
    }
  }

  return result;
};

console.log(findStartingAndEndingPosition([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(findStartingAndEndingPosition([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(findStartingAndEndingPosition([1, 2, 3, 4, 4, 4, 5, 6], 4)); // [3, 5]
console.log(findStartingAndEndingPosition([1, 1, 2, 2, 3, 4], 2)); // [2, 3]
