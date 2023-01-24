function solution(letter) {
    let arr = [-1];
    
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    for(i=0; i<letter.length; i++) {
        if(letter[i]===" ") {
            arr.push(i)
        }
    }
    let arr1 = [];
    for(j=0; j<arr.length; j++) {
        arr1.push(letter.slice(arr[j]+1, arr[j+1]))
    }
    let answer = "";
    for(k=0; k<arr1.length; k++) {
        answer = answer+morse[arr1[k]]
    }
    return answer;
}