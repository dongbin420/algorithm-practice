function solution(n) {
    let arr = [];
    let arr1 = [];    
    
    for(i=2; i<=n; i++) {
        if(n%i === 0) {
            arr.push(i)
        }
    }
    
    for(j=0; j<arr.length; j++) {
        for(k=2; k<arr[j]; k++) {
            if(arr[j]%k === 0) {
                arr1.push(arr[j]);
                break;
            }
        }
    }
    arr = arr.filter(function(el) {
        return !arr1.includes(el);
    })
    return arr;
}