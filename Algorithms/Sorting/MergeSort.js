const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let firstHalf = Math.ceil((array.length)/2);
  let left = array.splice(0, firstHalf);
  let right = array;
  console.log(left, right);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  if (left.length === 0) {
    return right;
  } else if (right.length === 0) {
    return left;
  }
  let newArray = [];
  while(left.length > 0 || right.length > 0) {
    if (left[0] < right[0]) {
      newArray.push(left[0]);
      left.shift();
    } else {
      newArray.push(right[0]);
      right.shift();
    }
  }
  return newArray;
}

// const arr1 = [1,2,6,8];
// const arr2 = [3,7,9];

// const answerMerge = merge(arr1, arr2);
// console.log(answerMerge);

const answer = mergeSort(numbers);
console.log(answer);