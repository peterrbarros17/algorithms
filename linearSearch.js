function linear_search(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return i
        }
    }
}

const myArray = [8,1,3,6,9,0,7]

const finded = linear_search(myArray, 6)

console.log(finded);