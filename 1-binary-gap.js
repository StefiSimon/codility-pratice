
// Longest substring of 0's between 1's

function checkNumber(binary) {
    if (binary.match(/[0]/g) === null || binary.match(/[0]/g).length < 1) {
        return false;
    }
    if (binary.match(/[1]/g) === null || binary.match(/[1]/g).length < 2) {
        return false;
    }
    return true;
}

function binaryGap(N) {
    let binary = N.toString(2);
    if (binary.length < 3 || !checkNumber(binary)) {
        return 0;
    } 

    // ------------ VERSION 1 ------------

    // let maxLength = 0;
    // let i = 0;
    // while (i < binary.length - 1) {
    //     let counter = 0;
    //     if (binary[i] === '1' && binary[i+1] === '0') {
    //         let j = i + 1;
    //         while (binary[j] === '0' && j < binary.length - 1) {
    //             j++;
    //         } 
    //         if (binary[j] === '1' || binary[j + 1] === '1') {
    //             counter = j - i - 1;
    //         }
    //         i = j;
    //     }
    //     if (counter > maxLength) {
    //         maxLength = counter;
    //     } 
    //     i++;
    // }

    // ------------ VERSION 2 ------------

    let zeroArr = binary.split('1');
    if (binary[binary.length - 1] === '0') {
        zeroArr.pop();
    }
    let maxLength = 0;
    zeroArr.forEach(element => {
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    });

    return maxLength;
}   








