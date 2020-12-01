// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//score 62% Performance tests fail
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result=0;
    if(A.length<3) return 0;

    let aLength=A.length;
    for(let p=0;p<=aLength-3;p++){
        for(let q=p+1;q<=aLength-2;q++){
            for(let r=q+1;r<=aLength-1;r++){
                let case1=A[p]+A[q]>A[r];
                let case2=A[q]+A[r]>A[p];
                let case3=A[r]+A[p]>A[q];
                if(case1&&case2&&case3) {
                    result=1;
                    break;
                }

            }
        }
    }

    return result;
}