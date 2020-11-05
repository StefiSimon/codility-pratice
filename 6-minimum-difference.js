// Min difference between the two parts: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// With 0 < P < N

function minDiff(A) {
    let P = 1;
    let min = 1000;
    if (A.length === 2) {
        return Math.abs(A[0] - A[1]);
    }
    if (A.length === 3) {
        let diff1 = A[0] + A[1] - A[2];
        let diff2 = A[0] - A[1] - A[2];
        return Math.min(Math.abs(diff1), Math.abs(diff2));
    }
    while (P < A.length) {
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < A.length; i++) {
            if (i < P) {
                sum1 += A[i];
            } else {
                sum2 += A[i];
            }
        }

        if (Math.abs(sum1 - sum2) < min) {
            min = Math.abs(sum1 - sum2);
        }
        P++;
    }
    return min;
}

const res = minDiff([7, 1, 2, 3, 1]);
console.log(res);