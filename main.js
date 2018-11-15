
let myArray = [1,3,5,9,17,21,82,96,100,130,170,191,200,201,222,257,299,357,375];

function BinarySearch (arr, data) {

    let low = 0;
    let high = arr.length - 1;
    let midpoint = Math.ceil((low + high) / 2);

    while (arr[midpoint] !== data && low <= high) {

        if (data < arr[midpoint]) {
            high = midpoint - 1;
            console.log("Binary searching...");
        } else {
            low = midpoint + 1;
            console.log("Binary searching...");
        }

        midpoint = Math.ceil((low + high) / 2);
    }

    return (arr[midpoint] !== data) ? console.log("Number not found") : console.log("Your number is at index: " + midpoint);
}

function linearSearch(arr, data)
{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            console.log("Number can be found at: " + i);
            return i;
        }
        else {
            console.log("Linear searching...");
        }
    }
}

let linearStartTime = performance.now();
linearSearch(myArray, 375);
let linearEndTime = performance.now();
let lineSearchTime = linearEndTime - linearStartTime;
console.log("Linear Search took: " + lineSearchTime + " milliseconds");


let binaryStartTime = performance.now();
BinarySearch(myArray, 375);
let binaryEndTime = performance.now();
let binaSearchTime = binaryEndTime - binaryStartTime;
console.log("Linear Search took: " + binaSearchTime + " milliseconds");