function isOdd(num) {
    return num + 1;
}

let arr = [1, 2, 3, 4, 5];
let oddNum = arr.filter((isOdd) => isOdd % 2 == 0);

console.log(oddNum);