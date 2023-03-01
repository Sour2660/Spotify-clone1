console.log("wellcome to spotify")
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('masterPlay');
let masterSongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"Let me love you",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Besharam",filepath:"songs/2.mp3",coverpath:"covers/1.jpg"}, 
    {songName:"salam-e-Ishq",filepath:"songs/3.mp3",coverpath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filepath:"songs/4.mp3",coverpath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filepath:"songs/5.mp3",coverpath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filepath:"songs/.6mp3",coverpath:"covers/1.jpg"},
    {songName:"salam-e-Ishq",filepath:"songs/7.mp3",coverpath:"covers/1.jpg"},
   

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play ();
        masterPlay.classList.remove('fa-play-circe');
        masterPlay.classList.remove('fa-pause-circe');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circe');
        masterPlay.classList.remove('fa-play-circe');
    }
}
)
//Listen to Event
audioElement.addEventListener('timeupdate',()=> {
    console.log('timeupdate');
    //update  seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*1000)
    console.log(progress);

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})
 
const makeALLPlays = ()=>{
    Array.from(document.getElementByClassName('songItemPlay').forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }))
}

Array.from(document.getElementByClassName('songItemPlay').forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeALLPlays();
    songIndex =parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.remove('fa-pause-circle');
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

}))

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex =0
    }
    else{
        songIndex += 1;

    }
    audioElement.src ='songs/${songsIndex+1}.mp3';
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src ='songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].sp=ongName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


