// Find triangular triplets in array

function triangularTriple(A) {
    if (A.length < 3) {
        return 0;
    }
    let sorted = A.sort((a, b) => a - b);
    let isFound = 0;
    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] + sorted[i+1] > sorted[i+2]) {
            isFound = 1;
        }
    }  
    return isFound;
}

const result = triangularTriple([10, 1, 50, 5]);
console.log(result);