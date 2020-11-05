function drawCircle(S, X, Y) {
    let areaArr = [];
    // compute area for each point to see how far from the center they are
    for (let i = 0; i < S.length; i++) {
        areaArr[i] = {
            name: S[i],
            value: Math.abs(X[i] * Y[i])
        }
    }
    // compute their occurences and the min value of area for repeating point
    const occurenceObj = {};
    let minDoublePointValue = { 
        value: 1000000000,
        index: -1
    };
    for (let i = 0; i < areaArr.length; i++) {
        if(! (occurenceObj[areaArr[i].name]) ) {
            occurenceObj[areaArr[i].name] = 1;
        } else {
            if (areaArr[i].value < minDoublePointValue.value) {
                minDoublePointValue = {
                    value: areaArr[i].value,
                    index: i
                };
            }
            occurenceObj[areaArr[i].name]++;
        }
    }
    // count those points with area smaller than min value computed above
    let maxPointCounter = 0;
    for (let i = 0; i < areaArr.length; i++) {
        if (areaArr[i].value < minDoublePointValue.value) {
            if (areaArr[i].value === 0) {
                if (X[i] === 0) {
                    if (Math.abs(Y[i]) < Math.abs(Y[minDoublePointValue.index])) {
                        maxPointCounter++;
                    }
                } else {
                    if (Math.abs(X[i]) < Math.abs(X[minDoublePointValue.index])) {
                        maxPointCounter++;
                    }
                }
            } else {
                maxPointCounter++;
            }
        }
    }
    return maxPointCounter;
}

function threeParts(S) {
    if (S.length < 3) {
        return 0;
    }
    let counter = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'a') {
            counter++;
        }
    }
    if (counter % 3 !== 0) {
        return 0;
    }
    let counterGroups = 0;
    let i = 0;
    while (i < S.length) {
        let counterB = 0;
        let counterA = 0;
        let j = i + 1;
        while ((counterA < counter / 3) && (j < S.length)) {
            if (S[j] === 'a') {
                counterA++;
            } else {
                counterB++;
            }
            j++;
        }
        counterGroups += counterB > 0 ? counterB + 1 : 1;
        i = j + 1;
    }
    if (S[0] === 'b') {
        counterGroups++;
    }
    if (S[S.length - 1] === 'b') {
        counterGroups++;
    }
    return counterGroups;
}

// const res1 = drawCircle('ABDCA', [2, -1, 0, -3, 3], [2, -2, 4, 1, -3]);

const res2 = threeParts('ababa');

console.log(res2);