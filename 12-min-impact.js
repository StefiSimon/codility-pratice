// Find min impact for several queries on DNA sequences (arrays)

function minImpact(S, P, Q) {
    const newArr = [];
    for (let i = 0; i < P.length; i++) {
        const subseq = S.slice(P[i], Q[i] + 1).split('');
        if (subseq.indexOf('A') !== -1) {
            newArr.push(1);
        } 
        else if (subseq.indexOf('C') !== -1) {
            newArr.push(2);
        } else if (subseq.indexOf('G') !== -1) {
            newArr.push(3);
        }
        else if (subseq.indexOf('T') !== -1) {
            newArr.push(4);
        }
    }
    return newArr;
}   

const res = minImpact('CAGCCTA', [2, 5, 0], [4, 5, 6]);
console.log(res);