class Solution {
  public String oddString(String[] words) {
    HashMap<List<Integer>, List<String>> dictionary = new HashMap<>();
    String result = "";
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      List<Integer> calc = new ArrayList<Integer>();
      for (int index2 = 1; index2 < word.length(); index2++){
        int difference = word.charAt(index2) - word.charAt(index2 - 1);
        calc.add(difference);
      }
      if (dictionary.containsKey(calc)){
        List<String> current = dictionary.get(calc);
        current.add(word);
        dictionary.put(calc, current);
      }
      else{
        dictionary.put(calc, new ArrayList<String>(Arrays.asList(word)));
      }
    }

    for (Map.Entry<List<Integer>, List<String>> num : dictionary.entrySet()){
      if (num.getValue().size() == 1){
        return num.getValue().get(0);
      }
    }

    return result;
  }
}