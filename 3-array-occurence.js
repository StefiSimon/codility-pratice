// Find number that appears odd times in array

function arrayOccurence(A) {
    let hashMap = new Object();
    A.map(el => {
        if (hashMap[el] === undefined) {
            hashMap[el] = 0;
        }
        hashMap[el] ++;
    });
    let oddNumberIndex = null;
    Object.keys(hashMap).map(key => {
        if (hashMap[key] % 2 === 1) {
            oddNumberIndex = key; 
        }
    }) 
    return parseInt(oddNumberIndex, 10);
};

const result = arrayOccurence([101, 3, 444, 3, 444, 23445, 101]);
console.log(result);



