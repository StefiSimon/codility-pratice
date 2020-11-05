// Find number of integers divisible by K between A and B

function divIntegers(A, B, K) {
    if (A === B) {
        return A % K === 0 ? 1 : 0;
    }
    const diff = parseInt(B/K) - parseInt(A/K);
    if (A % K === 0) {
        return diff + 1;
    }
    return diff;
}

const res = divIntegers(1, 1, 2);
console.log(res);