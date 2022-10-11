class Solution(object):
  def minimumRecolors(self, blocks, k):
    """
    :type blocks: str
    :type k: int
    :rtype: int
    """
    white = 0
    result = float('inf')
    for index, value in enumerate(blocks):
      if index >= k:
        if white < result:
          result = white
      if value == 'W':
        white += 1
      if index >= k and blocks[index - k] == 'W':
        white -= 1

    if white < result:
      result = white

    return result