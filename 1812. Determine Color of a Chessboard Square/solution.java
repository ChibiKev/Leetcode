class Solution {
  public boolean squareIsWhite(String coordinates) {
    int letter = (int) coordinates.charAt(0) - 97;
    int number = (int) coordinates.charAt(1);
    return (letter + number) % 2 == 0;
  }
}