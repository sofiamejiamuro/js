// AutoPlay puede acceder al objeto MediaPlayer porque es un objeto que se instancia como parte de los elementeos de MediaPlayer

function AutoPlay(){};

AutoPlay.prototype.run = function(player){
  // console.log('dentro de autoplay prototype');
  //player.muted = true;
  // console.log(player);
  player.mute()
  player.play();
};

export default AutoPlay;

/* function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay; */
