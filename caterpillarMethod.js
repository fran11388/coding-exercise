let arr = [6, 2, 7, 4, 1, 3, 6,0.1];
let s = 0.1;

console.log(caterpillarMethod(arr,s));

function caterpillarMethod(arr, s) {
    let rightIndex = 0, leftIndex = 0;
    let arrLength = arr.length;
    while (rightIndex < arrLength || leftIndex < arrLength) {
        let total = 0;
        for (let i = leftIndex; i <= rightIndex; i++) {
            total += arr[i];
        }
        let isMove=false;
        if (total === s) return true;
        if (total > s && leftIndex < rightIndex) {
            if (leftIndex+1<arrLength) {
                leftIndex++;
                isMove=true;
            }

        } else {
            if (rightIndex+1 < arrLength ) {
                rightIndex++;
                isMove=true;
            }

        }
        if(!isMove) break;
    }
    return false;
}