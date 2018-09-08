class PlayList{

  constructor(on_play,on_pause){
    this.songs = [];
    this.current_song;
    this.index = 0;
    this.on_play = on_play;
    this.on_pause = on_pause;
    this.interval;
  }
  songsInQueue(){
    console.log(this.index);
    return this.index+1 < this.songs.length;
  }
  Add(song){
    this.songs.push(song);
  }
  Clear(){
    this.songs = [];
    this.index = 0;
    this.current_song = null;
  }
  Play(song){
    if(song.name != "" && song.name.length > 2){
      //add the new song to the playlist
      this.Add(song);
      //set the current song to the requested one
      this.setCurrentSong(song);
    }
    else
      speech.speak("Pardon?");
  }

  startPlaylist(){
    this.playCurrentSong();
  }

  playCurrentSong(){
    this.current_song = this.songs[this.index];
    this.current_song.done = false;
    this.current_song.setCallback(this.on_play);
    this.current_song.loadUrl(this.current_song.name);
  }

  setCurrentSong(song){
      this.current_song = song;
      this.index = this.songs.length;
      this.current_song.setCallback(this.on_play);
      this.current_song.loadUrl(this.current_song.name);
      this.current_song.done = false;
  }

  PlayNext(){
    if(this.index+1 < this.songs.length){
      this.index++;
      this.playCurrentSong();
    }
    else{
      console.log("Reached the end of the playlist");
    }

  }

  PlayPrevious(){
    if(this.index>0){
      this.index--;
      this.playCurrentSong();
    }
    else{
      console.log("Reached the beginning of the playlist");
    }
  }

}
