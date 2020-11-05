// Find smallest positive integer in array (can also be negative numbers)

function smallestPositive(A) {
    let sortedArr = A.sort((a, b) => a - b);
    if (sortedArr[sortedArr.length - 1] <= 0) {
        return 1;
    }
    let hashMap = {};
    for (let i = 1; i <= A.length; i++) { 
        hashMap[i] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        if (sortedArr[i] > 0) {
            hashMap[sortedArr[i]]++;
        }
    }
    let missingNumber = A.length + 1;
    let keys = Object.keys(hashMap);
    for (let i = 0; i < keys.length; i++) {
        if (hashMap[keys[i]] === 0) {
            missingNumber = parseInt(keys[i]);
            break;
        }
    }
    return missingNumber;
}

const res = smallestPositive([-1, -3, 0, 1, -1, -2]);
console.log(res);