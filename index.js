function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('string.toHaveBeenCalledWith')
}

function logWhisper(string){
  console.log("string.toLowerCase")
}

function sayHiToGrandma(string){
  if (string.toLowerCase) {
    return "I can't hear you!"
  } else if (string.toUpperCase) {
    return "YES INDEED!"
  }
}
