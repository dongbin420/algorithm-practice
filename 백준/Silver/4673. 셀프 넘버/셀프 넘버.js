let all = [];

while(true) {
    for(i=1; i<10; i++) {
        let n = i;
        let dn = n+n;
        all.push(dn);
    }
    
    for(j=10; j<100; j++) {
        let m = String(j);
        let dm = j+parseInt(m[0])+parseInt(m[1]);
        all.push(dm);
    }
    
    for(k=100; k<1000; k++) {
        let x = String(k);
        let dx = k+parseInt(x[0])+parseInt(x[1])+parseInt(x[2]);
        all.push(dx);
    }
    
    
    for(h=1000; h<10000; h++) {
        let y = String(h);
        let dy = h+parseInt(y[0])+parseInt(y[1])+parseInt(y[2])+parseInt(y[3]);
        all.push(dy);
    }
    
    // let A = new Set(all);
    // let B = Array.from(A);
    // if(!B.includes(o)) {
    //     console.log(o);
    // }
    break;
}

let A = new Set(all);
let B = Array.from(A);

for(o=1; o<10000; o++) {
    if(!B.includes(o)) {
        console.log(o);
    }
}
