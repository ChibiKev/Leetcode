/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
  let words = text.trim().split(/\s+/);
  let spaces = 0;
  for (let index = 0; index < text.length; index++){
    let letter = text[index];
    if (letter == ' '){
      spaces += 1;      
    }
  }
  
  let gap = 0;
  if (words.length != 1){
    gap = Math.floor(spaces / (words.length - 1));    
  }

  let extraSpaces = spaces - gap * (words.length - 1);

  let spacesBetween = "";
  for (let index = 0; index < gap; index++){
    spacesBetween += " ";
  }

  let endingSpaces = "";
  for (let index = 0; index < extraSpaces; index++){
    endingSpaces += " ";
  }

  let result = "";
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    result += word;
    if (index != words.length - 1){
      result += spacesBetween;
    }
    else{
      result += endingSpaces;
    }
  }

  return result;
};