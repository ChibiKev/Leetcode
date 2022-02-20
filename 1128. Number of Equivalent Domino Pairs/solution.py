class Solution(object):
  def numEquivDominoPairs(self, dominoes):
    """
    :type dominoes: List[List[int]]
    :rtype: int
    """
    myDict = {}
    result = 0
    for domino in dominoes:
      usedDomino = str(domino[0]) + str(domino[1])
      flippedDomino = str(domino[1]) + str(domino[0])
      if flippedDomino in myDict:
        usedDomino = flippedDomino
      if usedDomino in myDict:
        result += myDict[usedDomino]
        myDict[usedDomino] += 1
      else:
        myDict[usedDomino] = 1
    
    return result