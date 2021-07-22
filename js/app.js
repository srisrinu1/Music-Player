const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const PrevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const Title = document.querySelector('#title');
const Cover = document.querySelector('#cover');
// songs
const songs = ["Gul", "Hututu", "Param Sundari", "Rihaayi De"];

//keep track of song
let songIndex = 0;
console.log(songIndex);

//load song into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    Cover.src = `images/${song}.jpg`;

}