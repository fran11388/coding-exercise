let hashMap = new Map();
console.log(fib(1000));




function fib(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (hashMap.get(n) !== undefined) return hashMap.get(n);
    let result=fib(n-1)+fib(n-2);
    hashMap.set(n,result);
    return result;


}