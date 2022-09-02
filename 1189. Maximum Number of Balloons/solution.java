class Solution {
  public int maxNumberOfBalloons(String text) {
    int b = 0;
    int a = 0;
    int l = 0;
    int o = 0;
    int n = 0;

    for (int index = 0; index < text.length(); index++){
      Character letter = text.charAt(index);
      if (letter == 'b'){
        b += 1;
      }
      else if (letter == 'a'){
        a += 1;
      }
      else if (letter == 'l'){
        l += 1;
      }
      else if (letter == 'o'){
        o += 1;
      }
      else if (letter == 'n'){
        n += 1;
      }
    }

    int minimum = b;
    if (a < minimum){
      minimum = a;
    }
    if (l / 2 < minimum){
     minimum = l / 2;   
    }
    if (o / 2 < minimum){
      minimum = o / 2;    
    }
    if (n < minimum){
      minimum = n;
    }

    return minimum;
  }
}