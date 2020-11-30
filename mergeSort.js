let arr = [1,3,5,2,4,6];

console.log(mergeSort(arr));

// console.log(merge([1,3,5,],[2,4,6]));
function merge(arr1, arr2) {
    let result = [];
    while (arr1.length !== 0 || arr2.length !== 0) {
        let num1 = arr1[0];
        let num2 = arr2[0];
        if (num1 != null && num2 != null) {
            if (num1 <= num2) {
                result.push(num1);
                arr1.splice(0, 1);
            } else {
                result.push(num2);
                arr2.splice(0, 1);
            }
        } else if (num1 != null) {
            result.push(num1);
            arr1.splice(0, 1);
        } else if (num2 != null) {
            result.push(num2);
            arr2.splice(0, 1);
        }

    }
    return result;
}

function mergeSort(arr) {
    if(arr.length<2) return arr;
    let half=Math.floor(arr.length/2);
    let left=arr.splice(0,half);
    let right=arr;

    let leftSorted=mergeSort(left);
    let rightSorted=mergeSort(right);
    return merge(leftSorted,rightSorted);
}