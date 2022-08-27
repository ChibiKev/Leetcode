/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let newS = "";
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (letter != "#"){
      newS += letter;
    }
    else{
      newS = newS.slice(0, newS.length - 1);
    }
  }

  let newT = "";
  for (let index = 0; index < t.length; index++){
    let letter = t[index];
    if (letter != "#"){
      newT += letter;
    }
    else{
      newT = newT.slice(0, newT.length - 1);
    }
  }

  return newS == newT;
};