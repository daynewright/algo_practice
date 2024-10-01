const longestSubArray = (string, k) => {
  let windowStart = 0;
  let maxLength = 0;
  const lettersSoFar = new Map(); // { 'c': 1 }

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    let endChar = string[windowEnd];

    if (!lettersSoFar.get(endChar)) {
      lettersSoFar.set(endChar, 1);
    } else {
      lettersSoFar.set(endChar, lettersSoFar.get(endChar) + 1);
    }

    while (lettersSoFar.size > k) {
      let startChar = string[windowStart];

      if (lettersSoFar.get(startChar) > 1) {
        lettersSoFar.set(startChar, lettersSoFar.get(startChar) - 1);
      } else {
        lettersSoFar.delete(startChar);
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(longestSubArray("eceba", 2));
