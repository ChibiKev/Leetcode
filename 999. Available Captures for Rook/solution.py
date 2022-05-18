class Solution(object):
  def numRookCaptures(self, board):
    """
    :type board: List[List[str]]
    :rtype: int
    """
    rook = []
    
    for row in range(8):
      for column in range(8):
        if board[row][column] == 'R':
          rook = [row, column]
    
    count = 0
    for row in range(rook[0] - 1, -1, -1):
      if board[row][rook[1]] == 'p':
        count += 1
        break
      elif board[row][rook[1]] == 'B':
        break
    for row in range(rook[0] + 1, 8, 1):
      if board[row][rook[1]] == 'p':
        count += 1
        break
      elif board[row][rook[1]] == 'B':
        break
    for column in range(rook[1] - 1, -1, -1):
      if board[rook[0]][column] == 'p':
        count += 1
        break
      elif board[rook[0]][column] == 'B':
        break
    for column in range(rook[1] + 1, 8, 1):
      if board[rook[0]][column] == 'p':
        count += 1
        break
      elif board[rook[0]][column] == 'B':
        break
    
    return count