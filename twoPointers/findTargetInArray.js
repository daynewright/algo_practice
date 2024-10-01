const findTargetInArray = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let steps = 0;

  while (left <= right) {
    steps++;

    let mid = Math.floor((left + right) / 2); // Calculate the mid-point

    if (arr[mid] === target) {
      return { steps, target };
    }

    if (arr[mid] > target) {
      right = mid - 1; // Move the right boundary
    } else {
      left = mid + 1; // Move the left boundary
    }
  }

  return { steps, target: null }; // Target not found
};

console.log(findTargetInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
