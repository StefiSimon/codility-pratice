// Find missing number in array - numbers 1-N or N+1 if it's complete

function missingEl(A) {
    const newArr = A.sort((a, b) => a - b);
    let foundNumber = null;
    if (newArr[0] !== 1) {
        return 1;
    }
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] + 1 !== newArr[i+1]) {
            foundNumber = newArr[i] + 1;
            break;
        }
    }
    return foundNumber;
}

let res = missingEl([11, 1, 4, 8, 5, 3, 6, 2, 9, 7]);
console.log(res);