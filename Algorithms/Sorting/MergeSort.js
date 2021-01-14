const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log(left, right);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let newArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// const arr1 = [1,2,6,8];
// const arr2 = [3,7,9];

// const answerMerge = merge(arr1, arr2);
// console.log(answerMerge);

const answer = mergeSort(numbers);
console.log(answer);