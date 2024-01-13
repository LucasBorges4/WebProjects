document.body.addEventListener('keyup', (event)=>{
    console.log(event.code.toLowerCase()); //event.code pega o evento que acontece na página ou seja pressionou apareceu.
    playSound(event.code.toLowerCase()); //tolowercase é para facilitar qual tag vamos usar.
}) //keyup == subida pós pressao, keydown pressao no botao
// Observa a página, se acontecer um evento ele capta.
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value; //pega a entrada 
    if (song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }

});
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);    
        }, wait)
        wait += wait + 100;
    }
}