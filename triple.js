// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

function sumOfTripledEvens(array) {
    let sum = 0
    // triple for every even number
    for(let i = 0; i , array.length; i++) {
        // locate even number
        if(array[i] % 2 == 0) {
            const evenNum = array[i] * 3;
            // add sum of even number to overall sum
            sum += evenNum;
        }
    }
    return sum;
}