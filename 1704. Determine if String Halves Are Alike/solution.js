/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let a = 0;
  let b = 0;

  for (let index = 0; index < s.length / 2; index++){
    if (vowels.has(s[index])){
      a += 1;
    }
    if (vowels.has(s[index + s.length / 2])){
      b += 1;
    }
  }

  return a == b;
};