let arr=[1,2,3,4,5,6,7,8,4.5];

console.log(inPlaceQuickSort(arr));




function inPlaceQuickSort(arr){
    if(arr.length<2) return arr;
    let pivotIndex=arr.length-1;
    let pivot=arr[pivotIndex];
    let index=0;
    for(let i=0;i<pivotIndex;i++){
        let num=arr[i];
        if(num<=pivot){
            swap(arr,index,i);
            index++;
        }
    }
    swap(arr,pivotIndex,index);

    let left=arr.slice(0,index);
    let right=arr.splice(index+1,pivotIndex+1);

    let leftSort=inPlaceQuickSort(left);
    let rightSort=inPlaceQuickSort(right);
    return leftSort.concat([pivot]).concat(rightSort) ;
}

function swap(arr,p1,p2){
    let temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
}

function quickSort(arr){
    if(arr.length<2) return arr;
    let pivotIndex=Math.floor(arr.length/2);
    let pivot=arr[pivotIndex];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(i===pivotIndex) continue;
        let num=arr[i];
        if(num<=pivot)left.push(num)
        else right.push(num);

    }

    let leftSort=quickSort(left);
    let rightSort=quickSort(right);
    return leftSort.concat([pivot]).concat(rightSort) ;
}



