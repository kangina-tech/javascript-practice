function addOne(num) {
    // add one to each num
    return num + 1;
}
// create array to add to the function
const arr = [1, 2, 3, 4, 5];
const mapArr = arr.map(addOne);

console.log(mapArr);