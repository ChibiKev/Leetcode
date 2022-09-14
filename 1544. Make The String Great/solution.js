/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
  let myStack = [];
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    if (myStack.length == 0){
      myStack.push(letter);      
    }
    else if (myStack[myStack.length - 1].toUpperCase() == myStack[myStack.length - 1] && myStack[myStack.length - 1].toLowerCase() == letter){
      myStack.pop();      
    }
    else if (myStack[myStack.length - 1].toLowerCase() == myStack[myStack.length - 1] && myStack[myStack.length - 1].toUpperCase() == letter){
      myStack.pop();
    }
    else{
      myStack.push(letter);
    }
  }

  return myStack.join("");
};