function solution(keyinput, board) {
    let base = [0, 0];
    for(let i = 0; i < keyinput.length; i++) {
        if(base[0] < Math.floor(board[0]/2) && keyinput[i] === "right") {
            base[0] = base[0] + 1;
        } else if(base[0] > -Math.floor(board[0]/2) && keyinput[i] === "left") {
            base[0] = base[0] - 1;
        } else if(base[1] < Math.floor(board[1]/2) && keyinput[i] === "up") {
            base[1] = base[1] + 1;
        } else if(base[1] > -Math.floor(board[1]/2) && keyinput[i] === "down") {
            base[1] = base[1] - 1;
        }
        
        
        
        // if(keyinput[i] === "left") {
        //     base[0] = base[0] - 1;
        // } else if(keyinput[i] === "right") {
        //     base[0] = base[0] + 1;
        // } else if(keyinput[i] === "up") {
        //     base[1] = base[1] + 1;
        // } else if(keyinput[i] === "down") {
        //     base[1] = base[1] - 1;
        // }
    }
//     if(base[0] > Math.floor(board[0]/2)) {
//         base[0] = Math.floor(board[0]/2)
//     } else if (base[0] < -Math.floor(board[0]/2)) {
//         base[0] = -Math.floor(board[0]/2)
//     }
    
//     if(base[1] > Math.floor(board[1]/2)) {
//         base[1] = Math.floor(board[1]/2)
//     } else if (base[1] < -Math.floor(board[1]/2)) {
//         base[1] = -Math.floor(board[1]/2)
//     }
    
    return base;
}