// Find first position when array is complete with numbers 1-X

function earliestTime(X, A) {
    let sum = 0;
    let resultIndex = -1;
    for (let i = 1; i <= X; i++) {
        sum += i;
    }
    let partialSum = 0;
    for (let i = X - 1; i < A.length; i++) {
        const partialArr = [...new Set(A.slice(0, i+1))];
        partialSum = partialArr.reduce((total, el) => total + el, 0);
        if (partialSum === sum) {
            resultIndex = i;
            break;
        }
    }
    return resultIndex;
}
const res = earliestTime(5, [1, 3, 1, 4, 2, 3, 5, 4]);
console.log(res);
