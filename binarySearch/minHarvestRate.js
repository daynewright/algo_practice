const minHarvestRate = (trees, h) => {
  // Function to calculate the number of hours required for a given harvest rate
  const hoursNeeded = (rate) => {
    let hours = 0;
    for (let apples of trees) {
      hours += Math.ceil(apples / rate); // How many hours to collect apples from a tree at 'rate'
    }
    return hours;
  };

  let left = 1; // Minimum possible rate
  let right = Math.max(...trees); // Maximum possible rate (the largest number of apples on a tree)
  let result = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Test the middle rate

    if (hoursNeeded(mid) <= h) {
      // If it's possible to finish within 'h' hours at this rate, it's a valid candidate
      result = mid; // Try to find a slower rate
      right = mid - 1;
    } else {
      // If it's not possible, try a faster rate
      left = mid + 1;
    }
  }

  return result;
};

// Example usage:
const trees = [3, 6, 7, 11]; // Number of apples on each tree
const hours = 8; // Total hours Bobby has
console.log(minHarvestRate(trees, hours)); // Output: 4
