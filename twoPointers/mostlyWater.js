// You are given an array height where each element represents the height of a vertical line on a 2D plane.
// The width between two lines is 1. You need to find the two lines that, together with the x-axis,
// form a container that can hold the most water.

// Return the maximum amount of water a container can store.

const holdsMostWater = (arrContainers) => {
  const leftPointer = 0;
  const rightPointer = arrContainers.length - 1;

  let maxWater = 0;

  while (leftPointer < rightPointer) {
    if (arrContainers[leftPointer] < arrContainers[rightPointer]) {
      leftPointer++;
    } else if (arrContainers[leftPointer] > arrContainers[rightPointer]) {
      rightPointer--;
    }
  }

  return maxWater;
};

console.log(holdsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(holdsMostWater([4, 3, 2, 1, 4])); // 16
