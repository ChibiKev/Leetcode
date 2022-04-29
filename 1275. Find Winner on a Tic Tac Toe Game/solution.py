class Solution(object):
  def tictactoe(self, moves):
    """
    :type moves: List[List[int]]
    :rtype: str
    """
    A = [0] * 8
    B = [0] * 8
    
    for index in range(len(moves)):
      row = moves[index][0]
      column = moves[index][1]
      player = A
      if index % 2 == 1:
        player = B
      player[row] += 1
      player[column + 3] += 1
      if row == column:
        player[6] += 1
      if row == 2 - column:
        player[7] += 1
    for index in range(8):
      if A[index] == 3:
        return "A"
      if B[index] == 3:
        return "B"
    
    if len(moves) == 9:
      return "Draw"
    
    return "Pending"