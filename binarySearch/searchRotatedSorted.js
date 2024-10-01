// You are given an integer array nums that is sorted in ascending order,
// but then rotated at some pivot unknown to you beforehand (i.e., [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2]).
// Write a function that searches for a target value in the array. If the target exists, then return its index. Otherwise, return -1.

// Example Cases:
//	1.	Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
//  Output: 4
//  (Explanation: The target is at index 4)
//	2.	Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
//  Output: -1
//  (Explanation: The target is not found)
//	3.	Input: nums = [1], target = 0
//  Output: -1
//  (Explanation: The target is not found)

const searchRotatedSorted = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

console.log(searchRotatedSorted([4, 5, 6, 7, 0, 1, 2], 0));
console.log(searchRotatedSorted([4, 5, 6, 7, 0, 1, 2], 3));
console.log(searchRotatedSorted([1], 0));
