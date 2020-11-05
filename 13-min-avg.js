// Find starting index of slice with min average (min 2 elements)

function minAvg(A) {
    let minAvg = 10000;
    let minIndex = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let newArr = A.slice(i, j+1);
            let avg = newArr.reduce((total, el) => total + el, 0) / (j - i + 1);
            if (avg < minAvg) {
                minAvg = avg;
                minIndex = i;
            }
        }
    }
    return minIndex;
}

const res = minAvg([4, 2, 2, 5, 1, 5, 8]);
console.log(res);