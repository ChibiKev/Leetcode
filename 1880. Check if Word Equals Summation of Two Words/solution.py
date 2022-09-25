class Solution(object):
  def isSumEqual(self, firstWord, secondWord, targetWord):
    """
    :type firstWord: str
    :type secondWord: str
    :type targetWord: str
    :rtype: bool
    """
    firstAddition = ""
    for letter in firstWord:
      firstAddition += str(ord(letter) - 97)
      
    secondAddition = ""
    for letter in secondWord:
      secondAddition += str(ord(letter) - 97)
      
    targetAddition = ""
    for letter in targetWord:
      targetAddition += str(ord(letter) - 97)
      
    return int(firstAddition) + int(secondAddition) == int(targetAddition)