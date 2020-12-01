// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//score 100%
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let liveFishs=0;
    let stack=[];
    for(let i=0;i<A.length;i++){
        let dir=B[i];
        if(dir===0&&stack.length===0){
            //向上游並且沒有任何往下游的魚 存活數加1
            liveFishs++;
        }else if(dir===0&&stack.length>0){
            //向上游 但有向下游的魚 開始比較魚大小
            let isCurrFishLive=true;
            while(stack.length>0){
                let stackFish=stack[stack.length-1];
                if(stackFish.size>A[i]){
                    //be eaten;
                    //比向下游的魚小 被吃掉設定為死亡
                    isCurrFishLive=false;
                    break;
                }else{
                    //比下游的魚大 把它吃掉
                    stack.pop();
                }
            }
            if(isCurrFishLive) liveFishs++;

        }else if(dir===1){
            //若是向下游的魚 加進stack
            let size=A[i];
            stack.push({size});
        }
    }
    return liveFishs+stack.length;
}