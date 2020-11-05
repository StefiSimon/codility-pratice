// Find number of unique elements

function distinctValues(A) {
    let hashMap = new Object();
    A.map(el => {
        if (hashMap[el] === undefined) {
            hashMap[el] = 0;
        }
        hashMap[el] = 1;
    });
    return Object.keys(hashMap).length;
};

const result = distinctValues([2, 1, 1, 2, 3, 1, 5]);
console.log(result);