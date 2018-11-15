
let myArray = [1,3,5,9,17,21,82,96,100];

let BinarySearch = function (arr, low, high, searchParam) {

    if (high >= low) {
        let midpoint = low + (high - low)/2;

        if (searchParam = arr[midpoint]) {
           return midpoint;
        }
        else if (searchParam < arr[midpoint]) {
            return BinarySearch(arr, low, midpoint - 1, searchParam)
        }
        else if (searchParam > arr[midpoint]) {
            return BinarySearch(arr, midpoint + 1, high, searchParam)
        }
    }
};

let result = BinarySearch(myArray, 0 , 8, 17);

console.log("Your number is at index: " + result);