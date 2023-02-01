const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = +input[0];
let cnt = 0;


if(1<=a && a<100) {
    console.log(a);
}

if(100<=a && a<1000) {
    for (i = 1; i <= a; i++) {
        let c = String(i);
        if ( parseInt(c[1]) - parseInt(c[0]) === parseInt(c[2]) - parseInt(c[1]) ) {
            cnt++;
        }
    }
    console.log(99+cnt);
}
if(a === 1000) {
    let d = String(1000);
    if( parseInt(d[3]) - parseInt(d[2]) === parseInt(d[2]) - parseInt(d[1]) && parseInt(d[1]) - parseInt(d[0]) === parseInt(d[2]) - parseInt(d[1]) ) {
        cnt++
    }
    for (i = 1; i < 1000; i++) {
        let c = String(i);
        if ( parseInt(c[1]) - parseInt(c[0]) === parseInt(c[2]) - parseInt(c[1]) ) {
            cnt++;
        }    
    }
    console.log(99+cnt);
}