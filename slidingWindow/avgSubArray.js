// Find the max average of k subarray from array

const findMaxAvgSubArray = (numArray, k) => {
  let windowStart = 0;
  let totalSoFar = 0;
  let maxAvg = -Infinity;

  for (let windowEnd = 0; windowEnd < numArray.length; windowEnd++) {
    totalSoFar += numArray[windowEnd];

    if (windowEnd - windowStart === k - 1) {
      maxAvg = Math.max(maxAvg, totalSoFar / k);
      totalSoFar -= numArray[windowStart];
      windowStart++;
    }
  }

  return maxAvg;
};

console.log(findMaxAvgSubArray([1, 12, -5, -6, 50, 3], 4)); // 12.75
