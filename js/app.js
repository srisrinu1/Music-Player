const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const PrevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const autoBtn = document.querySelector('#autoplay');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const Title = document.querySelector('#title');
const Cover = document.querySelector('#cover');

// songs
const songs = ["Gul", "Hututu", "Param Sundari", "Rihaayi De"];

//keep track of song
let songIndex = 0;

//load song into DOM
loadSong(songs[songIndex]);
//Play song
function playSong() {
    musicContainer.classList.add("play");
    // console.log(playBtn);
    playBtn.querySelector('i.fas').classList.remove("fa-play");
    playBtn.querySelector('i.fas').classList.add("fa-pause");
    audio.setAttribute("allow", "autoplay");
    audio.play();
}



//Update Duration
function UpdateDuration(e) {
    // const { duration, currentTime } = e.srcElement;
    const { duration, currentTime } = e.srcElement;
    const Progress = (currentTime / duration) * 100;
    progress.style.width = `${Progress}% `;

}

//Pause song
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector('i.fas').classList.add("fa-play");
    audio.pause();
}
//Previous Song
function PreviousSong() {
    songIndex -= 1;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
//Next Song
function NextSong() {
    songIndex += 1;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
//Auto play


function GotoNextSong() {
    songIndex += 1;
    loadSong(songs[songIndex]);
    playSong();
}
//Set ProgressContainer
function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;


}
//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    Cover.src = `images/${song}.jpg`;

}
playBtn.addEventListener("click", () => {
        const isPlaying = musicContainer.classList.contains("play");
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    })
    //Auto play 


PrevBtn.addEventListener("click", PreviousSong);
nextBtn.addEventListener("click", NextSong);
audio.addEventListener("timeupdate", UpdateDuration);

progressContainer.addEventListener("click", setProgress);
autoBtn.addEventListener("click", () => {
    audio.addEventListener("ended", GotoNextSong);
})