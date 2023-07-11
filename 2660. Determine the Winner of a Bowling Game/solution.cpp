class Solution {
public:
  int isWinner(vector<int>& player1, vector<int>& player2) {
    int player1Points = 0;
    int player2Points = 0;

    int doublePoints = 0;
    for (int index = 0; index < player1.size(); index++){
      int points = player1[index];
      if (doublePoints > 0){
        player1Points += points * 2;
        doublePoints -= 1;
      }
      else{
        player1Points += points;
      }
      if (points == 10){
        doublePoints = 2;
      }
    }
    
    doublePoints = 0;
    for (int index = 0; index < player2.size(); index++){
      int points = player2[index];
      if (doublePoints > 0){
        player2Points += points * 2;
        doublePoints -= 1;
      }
      else{
        player2Points += points;
      }
      if (points == 10){
        doublePoints = 2;
      }
    }
    
    if (player1Points > player2Points){
      return 1;
    }
    else if (player1Points < player2Points){
      return 2;
    }
    return 0;
  }
};