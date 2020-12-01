// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity:
//     O(N**2)
// score:50%

//performance test not pass

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pairCount=0;
    let record={};
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A.length;j++){
            if(i===j) continue;
            // if(A[i]===0||A[j]===0) continue;
            let d1Right=i+A[i];
            // let d1left=i-A[i];
            // let d2Right=j+A[j];
            let d2left=j-A[j];
            if(d1Right>=d2left&&i<=j) {
                let key1=`${i},${j}`;
                let key2=`${j},${i}`;
                if(record[key1]!=null||record[key2]!=null)continue;
                // console.log(i,j);;
                pairCount++;
                record[key1]=1;
                record[key2]=1;
            }
        }
    }

    return pairCount;
}