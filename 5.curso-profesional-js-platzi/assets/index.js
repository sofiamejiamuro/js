const video = document.querySelector("video");
const button = document.querySelector("button");

// Estamos creando una clase ( que en realidad es un objeto que se instancia)
function MediaPlayer(config){
  // Al hacer que el objeto requiera de sus elementos hace que sea utilizable de muchas formas que no sea estáticos, ejemplo vs poner el video directo  en el metedo agregado al prototype.
  this.media = config.el;
};

// Aunque funciona así lo ideal es que cada función ejecute una cosa, entonces la revisión de si el video estña poausado o no debe hacerse en el inclick del button 
/* MediaPlayer.prototype.playPause = function(){
  // .play es un metodo de video
  !this.media.paused
  ? this.media.pause()
  : this.media.play()
};
*/

MediaPlayer.prototype.play = function(){
  this.media.play();
};

MediaPlayer.prototype.play = function(){
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function(){
  this.media.paused
  ? this.media.play()
  : this.media.pause()
};

const player = new MediaPlayer({
  el: video
});

button.onclick = () => player.togglePlay();

