class Solution {
  public String toHex(int num) {
    Map<Integer, String> hexValue = new HashMap<Integer, String>(){{
      put(0, "0");
      put(1, "1");
      put(2, "2");
      put(3, "3");
      put(4, "4");
      put(5, "5");
      put(6, "6");
      put(7, "7");
      put(8, "8");
      put(9, "9");
      put(10, "a");
      put(11, "b");
      put(12, "c");
      put(13, "d");
      put(14, "e");
      put(15, "f");
    }};

    long value = num;

    if (value == 0){
      return "0";
    }
    else if (value < 0){
      value += Math.pow(2, 32);
    }

    String result = "";
    while (value > 0){
      Integer bit = (int) (value % 16);
      result = hexValue.get(bit) + result;
      value /= 16;
    }

    return result;
  }
}