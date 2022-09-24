class Solution {
public:
  bool squareIsWhite(string coordinates) {
    int letter = (int) coordinates[0] - 97;
    int number = (int) coordinates[1];
    return (letter + number) % 2 == 0;
  }
};