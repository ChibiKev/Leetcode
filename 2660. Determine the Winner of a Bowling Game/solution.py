class Solution(object):
  def isWinner(self, player1, player2):
    """
    :type player1: List[int]
    :type player2: List[int]
    :rtype: int
    """
    player1Points = 0
    player2Points = 0

    doublePoints = 0
    for points in player1:
      if doublePoints > 0:
        player1Points += points * 2
        doublePoints -= 1
      else:
        player1Points += points
      if points == 10:
        doublePoints = 2
    
    doublePoints = 0
    for points in player2:
      if doublePoints > 0:
        player2Points += points * 2
        doublePoints -= 1
      else:
        player2Points += points
      if points == 10:
        doublePoints = 2
    
    if player1Points > player2Points:
      return 1
    elif player1Points < player2Points:
      return 2
    return 0