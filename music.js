let change = 0;
let objects  = [
    {songName: 'Let me love you', author: 'Justin Bieber',song:"https://dl.dropbox.com/s/x6f49cu1rdqnngu/Let%20Me%20Love%20You.mp3?dl=0",img:"https://images.theconversation.com/files/468502/original/file-20220613-13-5z7b10.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"},
    {songName: 'Legends Never Die', author: 'Against The Current',song:"https://dl.dropbox.com/s/5jyylqps64nyoez/Legends%20never%20die.mp3?dl=0",img:"https://i.imgur.com/iki9Pf8.jpg"},
    {songName:'Believer', author: 'Dragons',song:"https://dl.dropbox.com/s/e5y42cc90ugx09t/Believer.mp3?dl=0",img:"https://i.ytimg.com/vi/UUD0LapcSqA/mqdefault.jpg"},
] 

const music = document.getElementById('music');
const text = document.getElementById("text");
const artist = document.getElementById("artist");
const botonBack = document.getElementById('btn-back');
const botonNext = document.getElementById('btn-next');
const pic = document.getElementById('picture');
const playBtn = document.getElementById('play')
const pause = document.getElementById('pause')
const animation = document.querySelector('.loader')

function showAnim(){
    animation.classList.remove('hide')
}
function hideAnim(){
    animation.classList.add('hide')
}

function updateUI(change) {
    text.textContent = objects[change].songName;
    pic.src= objects[change].img;
    artist.textContent = objects[change].author;
    music.src=objects[change].song;
    music.setAttribute('autoplay','');
}

botonNext.addEventListener('click',() =>{
    if (change < objects.length-1) {
        change++;
    } else{
        change = 0;
    }
    updateUI(change);
    showAnim();
});

botonBack.addEventListener('click',() =>{
    if (change == 0) {
        change+= objects.length-1;
    } else{
        change--;
    }
    updateUI(change);
    showAnim();
});

playBtn.addEventListener('click',()=>{
    if (music.paused) {
        music.play();
        showAnim();
    }
})

pause.addEventListener('click',()=>{
    if (!music.paused) {
        music.pause();
        hideAnim();
    }
})

