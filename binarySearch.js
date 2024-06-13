function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guess = arr[mid];

    if (guess === target) {
      return mid;
    } else if (guess < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

const myArray = [1, 3, 5, 7, 9];

const finded = binarySearch(myArray, 5);

console.log(finded);
