const longestSubStringWithoutRepeatingChars = (string) => {
  let windowStart = 0;
  let maxLength = 0;
  const lettersSoFar = new Map();

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const windowEndChar = string[windowEnd];

    if (lettersSoFar.get(windowEndChar)) {
      lettersSoFar.set(windowEndChar, lettersSoFar.get(windowEndChar) + 1);
    } else {
      lettersSoFar.set(windowEndChar, 1);
    }

    while (lettersSoFar.get(windowEndChar) > 1) {
      const windowStartChar = string[windowStart];

      if (lettersSoFar.get(windowStartChar) > 1) {
        lettersSoFar.set(
          windowStartChar,
          lettersSoFar.get(windowStartChar) - 1,
        );
      } else {
        lettersSoFar.delete(windowStartChar);
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(longestSubStringWithoutRepeatingChars("abcabcbb"));
