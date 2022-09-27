/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
  let words = title.split(" ");

  for (let index = 0; index < words.length; index++){
    let word = words[index];
    if (word.length > 2){
      words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    else{
      words[index] = word.toLowerCase();      
    }
  }

  return words.join(" ");
};