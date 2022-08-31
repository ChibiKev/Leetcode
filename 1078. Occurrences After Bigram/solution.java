class Solution {
  public String[] findOcurrences(String text, String first, String second) {
    String[] words = text.split(" ");
    List<String> result = new ArrayList<String>();
    int index = 0;

    while (index + 2 < words.length){
      if (words[index].equals(first)){
        if (words[index + 1].equals(second)){
          result.add(words[index + 2]);
          if (words[index + 1].equals(first) && words[index + 2].equals(second)){
            index += 0;
          }
          else if (words[index + 2].equals(first)){
            index += 1;
          }
          else{
            index += 2;
          }
        }
      }
      index += 1;
    }

    String[] resultList = result.toArray(new String[0]);
    return resultList;
  }
}