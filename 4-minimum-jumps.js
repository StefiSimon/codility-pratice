// Find min jumps by D distance between X and Y

function minJumps(X, Y, D) {
    if (X >= Y) {
        return 0;
    }
    if (X + D > Y) {
        return 1;
    } else {
        if ((Y - X) % D === 0) {
            return (Y - X) / D;
        } else return parseInt((Y - X) / D) + 1;
    }
}

const result = minJumps(1, 5, 2);
console.log(result);