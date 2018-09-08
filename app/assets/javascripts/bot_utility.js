function Process(string){
  string = string.toLowerCase();
  return data = {
    bot_called : isBotCalled(string),
    verb : processVerb(string),
    song_name : extractSongName(string)
  };
}

function isBotCalled(string){
  let outcome = false;
   //devo fare che se si prendono i 3/4 delle lettere del nome bot, lui risponde lo stess
  botname.forEach(function(element) {
    if(string.includes(element))
      outcome = true;
  });
  return outcome;
}

verbs = ["stop","pause","next","skip","play","add","queue","start"];
function processVerb(string){
  if(string.includes("stop") || string.includes("pause"))
    return "stop";
  else if(string.includes("play") || string.includes("start"))
    return "play";
  else if(string.includes("add") || string.includes("queue"))
    return "add";
  else if(string.includes("next") || string.includes("skip"))
    return "next";
  else if(string.includes("previous") || string.includes("back"))
    return "back";
}

function extractSongName(string){
  let newString = string.split(firstVerbInString(string)).pop();
  if(newString){
    return newString.trim();
  }
  return "";
}

function firstVerbInString(string){
  let split_string = string.split(" ");
  let fond = "";
  split_string.forEach(function(element) {
    if(verbs.includes(element) && fond == "")
      fond = element
  });
  return fond;
}

function isolateSongsLike(string){
  let split_string = ["like","to"];
  let fond = "";

  split_string.forEach(function(element) {
    if(fond == "")
      fond = string.extractSimilar(element);
  })
  let newString = string.split(fond).pop();
  if(newString)
    return newString.trim();
  console.log(newString);
}

//return true if all the words in b are similar to the one we give
String.prototype.isSimilar = function(b){
  let s2 = b.split(" ");
  let c = 0;
  for(let i = 0; i < s2.length;i++){
    if(this.specialInclude(s2[i]))
      c++;
  }
  if(c == s2.length)
    return true;
  else
    return false;
}

//return true when there is a similar string in a phrase
String.prototype.specialInclude = function(b){
  let t = this.split(" ");
  for(let i =0; i < t.length;i++)
    if(t[i].isAlike(b))
      return true;
  return false;
}

//return true only when there is 1 letter difference between 2 words
String.prototype.isAlike = function(b) {
  let errors = Math.abs(this.length - b.length);
  let size = this.length < b.length ? this.length : b.length;
  if(errors > 1)
    return false;
  else{
    for(let i =0; i < size;i++){
      if(this[i] != b[i]){
        errors++;
        if(errors > 1)
          return false;
      }
    }
  }
  if(errors > 1)
    return false;
  else
    return true;
}
//extract from the given string a word similar to the one in parameter
String.prototype.extractSimilar = function(a){
  let string = this.split(" ");
  for(let i =0; i < string.length;i++){
    if(string[i].isAlike(a))
      return string[i];
  }
  return "";
}

function recognizeSpecialOperation(string){
  if(string.isSimilar("song like") || string.isSimilar("similar song") || string.isSimilar("something like") || string.isSimilar("some thing like"))
    return 1;
  else if(string.isSimilar("top track") || string.isSimilar("best track") || string.isSimilar("top hit"))
    return 2;
  else
    return 0;
}

