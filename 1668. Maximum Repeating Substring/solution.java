class Solution {
  public int maxRepeating(String sequence, String word) {
    int count = 0;
    int maxCount = 0;
    int index = 0;
    while (index < sequence.length()){
      if (index + word.length() > sequence.length()){
        break;
      }
      if (sequence.substring(index, index + word.length()).equals(word)){
        count += 1;
        index += word.length();
        if (count > maxCount){
          maxCount = count;
        }
      }
      else{
        index += 1;
        count = 0;
      }
    }

    index = sequence.length();
    count = 0;

    while (index > -1){
      if (index - word.length() < 0){
        break;
      }
      if (sequence.substring(index - word.length(), index).equals(word)){
        count += 1;
        index -= word.length();
        if (count > maxCount){
          maxCount = count;
        }
      }
      else{
        index -= 1;
        count = 0;
      }
    }

    return maxCount;
  }
}