// Number of intersecting discs/segments

function intersectDiscs(A) {
    let segmentMatrix = [];
    for (i = 0; i < A.length; i++) {
        segmentMatrix[i] = {
            x: i - A[i],
            y: i + A[i]
        }
    }
    let totalIntersections = 0;
    for (i = 0; i < segmentMatrix.length; i++) {
        let currentValue = segmentMatrix[i];
        let j = i + 1;
        while (j < segmentMatrix.length) {
            let nextValue = segmentMatrix[j];
            if (!(currentValue.x > nextValue.y || nextValue.x > currentValue.y)) {
                totalIntersections++;
            }
            j++;
        }
    }
    return totalIntersections > 10000000 ? -1 : totalIntersections;
}

const result = intersectDiscs([1, 5, 2, 1, 4, 0]);
console.log(result);
