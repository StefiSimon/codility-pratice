// Operations on N counters (0, 0, ..., 0) - increase if value in A is between 1 and N and max(value in array) if value is N+1

function maxCounters(N, A) {
    let counterArr = [];
    for (let i = 0; i < N; i++) {
        counterArr[i] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        if (1 <= A[i] && A[i] <= N) {
            counterArr[A[i] - 1]++;
        } else if (A[i] === N + 1) {
            counterArr.fill(Math.max(...counterArr), 0, N);
        }
    }
    return counterArr;
}

const res = maxCounters(5, [3, 4, 4, 6, 1, 4, 4]);
console.log(res);