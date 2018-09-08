class Song{

  constructor(name) {
    this.name = name;
    this.url = "";
    this.done = false;
    this.callback;
  }

  loadUrl(name){
    //fetch("https://mmelody.herokuapp.com/api/v1/getvideourl/"+name)
    fetch("http://localhost:3000/api/v1/getvideourl/"+name)
      .then(response => response.json())
      .then((data) => {
        this.url = data.infos[0]["url"];
        this.name = data.infos[0]["name"];
        if(this.callback){
          this.callback();
        }
      });
  }

  isUrlReady(){
    return this.url != "";
  }

  setCallback(call){
    if(!this.isUrlReady())
      this.callback = call;
    else{
      this.callback = call;
      this.callback();
    }
  }
}
