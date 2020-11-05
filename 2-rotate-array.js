// Rotate array A with K pos

function rotateArray(A, K) {
    let newArr = new Array(A.length);
    for (let i = 0; i < A.length; i ++) {
        newPos = i + K;
        newArr[newPos % A.length] = A[i];
    }
    return newArr;
}