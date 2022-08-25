class Solution {
  public int getLucky(String s, int k) {
    Map<Character, String> letters = new HashMap<Character, String>(){{
      put('a', "1");
      put('b', "2");
      put('c', "3");
      put('d', "4");
      put('e', "5");
      put('f', "6");
      put('g', "7");
      put('h', "8");
      put('i', "9");
      put('j', "10");
      put('k', "11");
      put('l', "12");
      put('m', "13");
      put('n', "14");
      put('o', "15");
      put('p', "16");
      put('q', "17");
      put('r', "18");
      put('s', "19");
      put('t', "20");
      put('u', "21");
      put('v', "22");
      put('w', "23");
      put('x', "24");
      put('y', "25");
      put('z', "26");
    }};
    
    String numbers = "";

    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      numbers += letters.get(letter);
    }

    int count = 0;
    while (count < k){
      int newNumber = 0;
      for (int index = 0; index < numbers.length(); index++){
        int number = (int) numbers.charAt(index) - 48;
        newNumber += number;
      }
      numbers = String.valueOf(newNumber);
      count += 1;
    }

    return Integer.parseInt(numbers);
  }
}