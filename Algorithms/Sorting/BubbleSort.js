const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (i=0; i<array.length-1; i++) {
    for(j=0; j<array.length-1-i; j++) {
      let value1 = array[j];
      let value2 = array[j+1];
      if(value1 > value2) {
        array[j] = value2;
        array[j+1] = value1;
      }
    }
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);