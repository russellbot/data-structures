const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i=0; i<array.length-1; i++) {
    // Assign smallest item to first value
    let smallestItem = array[i];
    for (let j=i; j<array.length-1; j++) {
      // if the next value is smaller, assign it to smallestItem
      if(array[j+1] < smallestItem) {
        smallestItem = array[j+1];
      }    
    }
  // find the index of the smallestItem
  let indexSmall = array.indexOf(smallestItem);
  // set a temporary value for the first item in the loop
  let temp = array[i];
  // move the smallestItem to the front of the array
  array[i] = smallestItem;
  // move the temp value to the index of the smallestItem
  array[indexSmall] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);