/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let myList = s.split("");
  let start = 0;
  let end = myList.length - 1;

  while (start < end){
    while (start < end && !vowels.has(myList[start])){
      start += 1;
    }
    while (end > start && !vowels.has(myList[end])){
      end -= 1;
    }
    let temp = myList[start];
    myList[start] = myList[end];
    myList[end] = temp;
    start += 1;
    end -= 1;
  }

  return myList.join("");
};