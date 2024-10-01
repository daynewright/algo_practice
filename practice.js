function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let previousIndex = i - 1;

    console.log(`
> enters for loop
Current array: ${arr}
NTI: ${numberToInsert} at position ${i}, 
Previous Element: ${arr[previousIndex]} at position ${previousIndex}`);

    while (arr[previousIndex] > numberToInsert) {
      arr[previousIndex + 1] = arr[previousIndex];

      console.log(`
            >> enters while loop: 
            Copy ${arr[previousIndex]} to position ${previousIndex + 1}
            Temporary array : ${arr}
            Temporary Previous Element: ${
              arr[previousIndex]
            } at position ${previousIndex}`);

      // updates previousIndex only inside the while loop (and prevents infinite loop)
      previousIndex = previousIndex - 1;
      console.log(`
            If ${numberToInsert} is greater than ${arr[previousIndex]} at position ${previousIndex}, exit while loop`);
    }

    arr[previousIndex + 1] = numberToInsert;

    console.log(
      `
        Inserts number ${numberToInsert} at position ${[previousIndex + 1]} 
        NEW loop array: `,
      arr
    );
  }
}

insertionSort([-5, 43, 2, 6, -4, 0, 7]);

i = 4;
arr[i] = -4;

j = 3;
arr[j] = 43;

num = -(4)[(-5, 2, 6, 43, 43, 0, 7)];
