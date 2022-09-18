class Solution {
  public int countVowelSubstrings(String word) {
    int j = 0;
    int k = 0;
    int vowel = 0;
    int count = 0;
    HashMap<Character, Integer> vowels = new HashMap<>();
    vowels.put('a', 0);
    vowels.put('e', 0);
    vowels.put('i', 0);
    vowels.put('o', 0);
    vowels.put('u', 0);

    for (int index = 0; index < word.length(); index++){
      Character letter = word.charAt(index);
      if (vowels.get(letter) != null){
        vowels.put(letter, vowels.get(letter) + 1);
        if ((int) vowels.get(letter) == 1){
          vowel += 1;
        }
        while (vowel == 5){
          vowels.put(word.charAt(k), vowels.get(word.charAt(k)) - 1);
          if ((int) vowels.get(word.charAt(k)) == 0){
            vowel -= 1;
          }
          k += 1;
        }
        count += (k - j);
      }
      else{
        vowels.put('a', 0);
        vowels.put('e', 0);
        vowels.put('i', 0);
        vowels.put('o', 0);
        vowels.put('u', 0);
        vowel = 0;
        j = index + 1;
        k = index + 1;
      }
    }
    return count;
  }
}