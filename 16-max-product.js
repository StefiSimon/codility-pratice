// Find max product of 3 numbers in array

function maxProduct(A) {
    let sorted = A.sort((a, b) => a - b);
    const length = sorted.length;
    let posProduct = sorted[length - 3] * sorted[length - 2] * sorted[length - 1];
    if (sorted[0] < 0 && sorted[1] < 0) {
        let negProduct = sorted[0] * sorted[1] * sorted[length - 1];
        if (negProduct > posProduct) {
            posProduct = negProduct;
        } 
    }
    return posProduct;
};

const result = maxProduct([-3, -2, -2, -10, -4]);
console.log(result);