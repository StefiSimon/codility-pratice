// Find if array is permutation: has all elements between 1 and N once

function permutation(A) {
    let hashMap = {};
    for (let i = 1; i <= A.length; i++) { 
        hashMap[i] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        hashMap[A[i]]++;
    }
    let isPerm = 1;
    let keys = Object.keys(hashMap);
    for (let i = 0; i < keys.length; i++) {
        if (hashMap[keys[i]] === 0) {
            isPerm = 0;
        }
    }
    return isPerm;
}

const res = permutation([4, 1, 3, 2, 4]);
console.log(res);