// function solution(genres, plays) {
//     const musicObj = {};
//     const bestAlbum = [];
    
//     for (let i = 0; i < genres.length; i++) {
//         if (!musicObj[genres[i]]) {
//             musicObj[genres[i]] = {songs: [{id: i, play: plays[i]}], totalPlay: plays[i]} ;
//         } else {
//             musicObj[genres[i]].songs.push({id: i, play: plays[i]});
//             musicObj[genres[i]].totalPlay += plays[i]; 
//         }
//     }
    
//     const sortedGenres = Object.keys(musicObj).sort((a, b) => musicObj[b].totalPlay - musicObj[a].totalPlay);
    
//     sortedGenres.forEach((genre) => {
//         musicObj[genre].songs = musicObj[genre].songs.sort((a, b) => b.play - a.play || a.id - b.id);
        
//         for (let i = 0; i < 2; i++) {
//             bestAlbum.push(musicObj[genre].songs[i].id);
//         }
//     })
    
//     console.log(musicObj);
//     console.log(bestAlbum);
    
//     return bestAlbum;
// }












// 이 줄 부터, 위 문제의 핵심은~ 이라고 작성한 부분까지 첫 정답 풀이
function solution(genres, plays) {
    const sortByGenres = {};
    const bestAlbum = [];
    
    genres.forEach((genre, idx) => {
        if (!sortByGenres[genre]) {
            sortByGenres[genre] = { totalPlays: 0, songs: [] };
        }
        
        sortByGenres[genre].totalPlays += plays[idx];
        sortByGenres[genre].songs.push({ id: idx, plays: plays[idx] });
    })
    
    const sortedGenre = Object.keys(sortByGenres).sort((a, b) => sortByGenres[b].totalPlays - sortByGenres[a].totalPlays);
    
    sortedGenre.forEach((genre) => {
        const songs = sortByGenres[genre].songs.sort((a, b) => {
            // b곡과 a곡의 플레이수가 같아서 0으로 false면 id 크기 비교로 내림차순 정함
            return b.plays - a.plays || a.id - b.id;
        }).slice(0, 2);
        
        bestAlbum.push(...songs.map((song) => song.id));
    })
    
    return bestAlbum;
}
// 위 문제의 핵심은, 주어진 조건들을 이용해서 문제를 풀기 위해 객체 구조를 직접 커스터마이징
// 해서 조건들을 만족시키면서 문제를 풀어나가는 것.


// 1. 처음에 풀다가 막힌 풀이
// function solution(genres, plays) {
//     const mapOfSongs = new Map();
//     const uniqueGenres = new Set(genres);
//     const playsOfGenres = new Map();
//     const bestAlbum = [];
    
//     uniqueGenres.forEach((value) => {
//         playsOfGenres.set(value, 0);
//     })
    
//     for (let i = 0; i < genres.length; i++) {
//         mapOfSongs.set(i, { genre: genres[i], play: plays[i] });
//         playsOfGenres.set(genres[i], playsOfGenres.get(genres[i]) + plays[i]);
//     }
    
//     // 맵 객체를 Array.from에 전달해서, [(키), (값)]을 요소로 같은 이차원 배열을 만들 수 있음을 이해하기.
//     const sortedGenre = Array.from(playsOfGenres).sort((a, b) => b[1] - a[1]);
    
//     sortedGenre.forEach(([genre]) => {
        
//     })
    
//     console.log(sortedGenre)
//     console.log(mapOfSongs);
//     console.log(playsOfGenres);
// }