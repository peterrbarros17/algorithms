function findSmallestIndex(arr) {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  let newArray = [];
  let copyArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallestIndex(copyArray);

    newArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return newArray;
}

const myArray = [1, 5, 2, 0, 3, 6];

console.log(selectionSort(myArray));
