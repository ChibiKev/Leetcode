class Solution {
public:
  int countVowelSubstrings(string word) {
    int j = 0;
    int k = 0;
    int vowel = 0;
    int count = 0;
    unordered_map<char, int> vowels {
      {'a', 0},
      {'e', 0},
      {'i', 0},
      {'o', 0},
      {'u', 0}
    };

    for (int index = 0; index < word.size(); index++){
      char letter = word[index];
      if (vowels.count(letter)){
        vowels[letter] += 1;
        if (vowels[letter] == 1){
          vowel += 1;
        }
        while (vowel == 5){
          vowels[word[k]] -= 1;
          if (vowels[word[k]] == 0){
            vowel -= 1;
          }
          k += 1;
        }
        count += (k - j);
      }
      else{
        vowels['a'] = 0;
        vowels['e'] = 0;
        vowels['i'] = 0;
        vowels['o'] = 0;
        vowels['u'] = 0;
        vowel = 0;
        j = index + 1;
        k = index + 1;
      }
    }
    return count;
  }
};