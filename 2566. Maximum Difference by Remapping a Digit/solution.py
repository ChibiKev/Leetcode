class Solution(object):
  def minMaxDifference(self, num):
    """
    :type num: int
    :rtype: int
    """
    nonZero = ""
    nonNine = ""

    stringNum = str(num)
    for numValue in stringNum:
      if numValue != "0":
        nonZero = numValue
        break

    for numValue in stringNum:
      if numValue != "9":
        nonNine = numValue
        break

    minNum = ""
    maxNum = ""
    for numValue in stringNum:
      if numValue == nonZero:
        minNum += "0"
      else:
        minNum += numValue
      if numValue == nonNine:
        maxNum += "9"
      else:
        maxNum += numValue
    
    return int(maxNum) - int(minNum)