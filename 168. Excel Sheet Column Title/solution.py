class Solution(object):
  def convertToTitle(self, columnNumber):
    """
    :type columnNumber: int
    :rtype: str
    """
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    result = ""
    while columnNumber > 0:
      result += letters[(columnNumber - 1) % 26]
      columnNumber = (columnNumber - 1) // 26
      
    return result[::-1]