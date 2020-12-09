let a='ewfe123wf';
let b='123';

console.log(isSubstr(a,b));

function isSubstr(a,b){
    let bLeng=b.length;
    for(let i=0;i<a.length-bLeng;i++){
        let isSubstr=true;
        for(let j=0;j<bLeng;j++){
            let bChar=b[j];
            if(bChar!==a[i+j]) isSubstr=false;
        }
        if(isSubstr) return true;
    }
    return false;
}