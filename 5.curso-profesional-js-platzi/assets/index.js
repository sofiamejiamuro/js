import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play-pause");
const buttonUnmute = document.querySelector("#unmute");
const player = new MediaPlayer({
  el: video,
  // plugin es la instanciacion del objeto AutoPlay
  plugins: [/*  new AutoPlay() */]
});

// Player es la instancia del objeto MediaPlayer, es decir sus elemntos y sus métodos
console.log('player',player);
console.log('plugins',player.plugins);

buttonPlay.onclick = () => player.togglePlay();
buttonUnmute.onclick = () => player.toggleMute();

