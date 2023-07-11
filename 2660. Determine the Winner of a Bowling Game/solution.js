/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  let player1Points = 0;
  let player2Points = 0;

  let doublePoints = 0;
  for (let index = 0; index < player1.length; index++){
    let points = player1[index];
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
  for (let index = 0; index < player2.length; index++){
    let points = player2[index];
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
};