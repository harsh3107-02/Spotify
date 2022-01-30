let audioElement= new Audio('songs/1.mp3');

let songIndex=1;
let masterplay=document.getElementById('masterplay')
let gif=document.getElementById('gif2');
let progress=document.getElementById('myprogressbar')
let masterSongName=document.getElementById('masterSongName');
let songitem= Array.from(document.getElementsByClassName('song-item'));
let images=document.getElementById('images');


let songs=[
    {songname:'LEGION',filepath:'songs/1.mp3' , coverpath:'covers/1.jpg'},
    {songname:'TRAP' ,filepath:'songs/2.mp3' , coverpath:'covers/2.jpg'},
    {songname:'THEY MAD',filepath:'songs/3.mp3' , coverpath:'covers/3.jpg'},
    {songname:'RICH THE KID',filepath:'songs/4.mp3' , coverpath:'covers/4.jpg'},
    {songname:'SONG TITLE',filepath:'songs/5.mp3' , coverpath:'covers/5.jpg'},
    {songname:'SAFETY DANCE',filepath:'songs/6.mp3' , coverpath:'covers/6.jpg'},
    {songname:'BACK IT UP',filepath:'songs/7.mp3' , coverpath:'covers/7.jpg'},
    {songname:'FAKE WORLD',filepath:'songs/8.mp3' , coverpath:'covers/8.jpg'},
    {songname:'LOT"S OF LOVE',filepath:'songs/9.mp3' , coverpath:'covers/9.jpg'},
    {songname:'TRUE LOVE',filepath:'songs/10.mp3' , coverpath:'covers/10.jpg'},

]
songitem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverpath
    element.getElementsByClassName('songName')[0].innerHTML =songs[i].songname
})

masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate' ,()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100; 
})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');   
        audioElement.src= `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})