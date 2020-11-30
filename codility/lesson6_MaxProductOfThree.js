// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity:
//     O(N**3)
// score 44%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let productMemoi={};
    let max=-1000000000;
    let aLength=A.length
    for(let p=0;p<=aLength-3;p++){
        for(let q=p+1;q<=aLength-2;q++){
            for(let r=q+1;r<=aLength-1;r++){
                // console.log(p,q,r);
                let pqKey=`${p}*${q}`;
                let pqProduct;
                if(productMemoi[pqKey]!=null){
                    pqProduct=productMemoi[pqKey];
                }else{
                    pqProduct=A[p]*A[q];
                    productMemoi[pqKey]=pqProduct;
                }

                let product=pqProduct*A[r];
                if(product>max) {
                    max=product;
                    // console.log('max',p,q,r);
                }

            }
        }
    }
    // console.log(productMemoi);
    return max;
}