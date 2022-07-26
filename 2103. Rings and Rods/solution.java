class Solution {
  public int countPoints(String rings) {
    int[] red = {0,0,0,0,0,0,0,0,0,0};
    int[] green = {0,0,0,0,0,0,0,0,0,0};
    int[] blue = {0,0,0,0,0,0,0,0,0,0};

    int index = 0;
    while (index < rings.length()){
      Character letter = rings.charAt(index);
      int value = rings.charAt(index + 1) - 48;
      if (letter == 'R'){
        red[value] += 1;
      }
      else if (letter == 'G'){
        green[value] += 1;
      }
      else if (letter == 'B'){
        blue[value] += 1;
      }
      index += 2;
    }

    int count = 0;
    for (int index2 = 0; index2 < 10; index2++){
      if (red[index2] > 0 && green[index2] > 0 && blue[index2] > 0){
        count += 1;
      }
    }

    return count;
  }
}