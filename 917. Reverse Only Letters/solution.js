/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  let myList = s.split("");
  let start = 0;
  let end = s.length - 1;

  while (start < end){
    if  (!/^[A-Z]$/i.test(myList[start])){
      start += 1;
    }
    else if (!/^[A-Z]$/i.test(myList[end])){
      end -= 1;      
    }
    else{
      let temp = myList[start];
      myList[start] = myList[end];
      myList[end] = temp;
      start += 1;
      end -= 1;
    }
  }

  return myList.join("");
};