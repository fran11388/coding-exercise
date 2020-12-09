function divisors(n){
    let result=0;
    for(var i=1;i*i<n;i++){
        if(n%i===0) result+=2;
    }
    if(i*i===n) result+=1;
    return result;
}

function isPrime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i===0) return  false;
    }

    return true;
}

console.log(isPrime(3));