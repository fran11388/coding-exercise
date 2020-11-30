// Detected time complexity:
//     O(N ** 2)

//60% score

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let positionMinValue=new Map();

    let aLength=A.length;
    for(let startPos=0;startPos<aLength-1;startPos++){ //起點迭代
        let min=10000;
        let endPosAccu={}; //memoization for end position sum
        for(let endPos=startPos+1;endPos<aLength;endPos++){ //終點迭代

            let sum=0;
            if(endPosAccu[endPos-1]!=null){ //endPos-1若已計算過 從快取拿
                sum=endPosAccu[endPos-1];
                sum+=A[endPos];
            }else{ //否則重頭計算
                for(let i=startPos;i<=endPos;i++){
                    sum+=A[i];
                }
            }

            let avg=sum/(endPos-startPos+1);
            if(avg<min) min=avg;

            endPosAccu[endPos]=sum;
        }

        positionMinValue.set(startPos,min);
    }

    // console.log(positionMinValue);
    let minPos=0;
    let minVal=positionMinValue.get(0);
    for(let startPos=1;startPos<aLength-1;startPos++){
        let posMinVal=positionMinValue.get(startPos);
        if(posMinVal<minVal){
            minVal=posMinVal;
            minPos=startPos;
        }
    }

    return minPos;
}