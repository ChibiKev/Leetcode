/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
  let letters = {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "6",
    "g": "7",
    "h": "8",
    "i": "9",
    "j": "10",
    "k": "11",
    "l": "12",
    "m": "13",
    "n": "14",
    "o": "15",
    "p": "16",
    "q": "17",
    "r": "18",
    "s": "19",
    "t": "20",
    "u": "21",
    "v": "22",
    "w": "23",
    "x": "24",
    "y": "25",
    "z": "26"
  }
  
  let numbers = "";
  
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    numbers += letters[letter];
  }
  
  let count = 0;
  while (count < k){
    let newNumber = 0;
    for (let index = 0; index < numbers.length; index++){
      let number = numbers[index];
      newNumber += parseInt(number);
    }
    numbers = newNumber.toString();
    count += 1;
  }

  return numbers;
};