// Find pairs of 0's and 1's in array

function bitPair(A) {
    let totalPairs = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            let j = i + 1;
            while (j < A.length) {
                if (A[j] === 1) {
                    totalPairs++;
                }
                j++;
            }
        }
    }
    return totalPairs < 1000000000 ? totalPairs : -1;
};

const res = bitPair([0, 1, 0, 1, 1]);
console.log(res);