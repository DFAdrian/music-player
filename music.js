let change = 0;
let objects  = [
    {songName: 'Solamente tu', author: 'Pablo Alboran',song:"/SOLAMENTE TÚ (PABLO ALBORÁN).mp3",img:"https://i.scdn.co/image/ab67616d0000b273337e905147bb1845d04d1686"},
    {songName: 'Cold as Ice', author: 'Foreigner',song:"/Foreigner - Cold As Ice (Single - LP Version).mp3",img:"https://upload.wikimedia.org/wikipedia/en/3/3f/Foreigner_-_Cold_As_Ice_b-w_I_Need_You_%281977%29.jpg"},
    {songName:'AC/DC', author: 'Highway to Hell',song:"/DC.mp3",img:"https://media.newyorker.com/photos/59095f7eebe912338a374b3a/master/w_2560%2Cc_limit/Michaud-ACDC.jpg"},
    {songName: "About Damn Time", author:'Lizzo',song:"/About Damn Time.mp3",img:"https://upload.wikimedia.org/wikipedia/en/d/da/Lizzo_-_About_Damn_Time.png"}
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

