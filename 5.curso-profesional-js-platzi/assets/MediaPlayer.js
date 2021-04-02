// Estamos creando una clase ( que en realidad es un objeto que se instancia)
function MediaPlayer(config){
  // Al hacer que el objeto requiera de sus elementos hace que sea utilizable de muchas formas que no sea estáticos, ejemplo vs poner el video directo  en el metedo agregado al prototype.
  this.media = config.el;
  //  Pluggins, damos un valor incial por si no llega la info
  // La info es la inicializaicon del objeteo Auto play 
  this.plugins = config.plugins || [];

  this._initPlugins();
};

// Aunque funciona así lo ideal es que cada función ejecute una cosa, entonces la revisión de si el video estña poausado o no debe hacerse en el inclick del button 
/* MediaPlayer.prototype.playPause = function(){
  // .play es un metodo de video
  !this.media.paused
  ? this.media.pause()
  : this.media.play()
};
*/

MediaPlayer.prototype._initPlugins = function(){
  console.log('inicializando plugins')
  this.plugins.forEach(plugin => {
    // Donde this es el objeto instanciado media player, con sus elementos y metodos
    // console.log('plugin', plugin);
    // console.log('plugin', plugin.run);
    // console.log('plugin', plugin.run(this.media)); // no necesito pasarale especiuficamente media porque el metodo lo resuelve
    plugin.run(this);
    console.log('this',this);
  });
};

MediaPlayer.prototype.play = function(){
  this.media.play();
};

MediaPlayer.prototype.pause = function(){
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function(){
  this.media.paused
  ? this.media.play()
  : this.media.pause()
};

MediaPlayer.prototype.mute = function(){
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function(){
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function(){
  this.media.muted
  ? this.unmute()
  : this.mute()
};

export default MediaPlayer;