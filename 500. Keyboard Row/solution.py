class Solution(object):
  def findWords(self, words):
    """
    :type words: List[str]
    :rtype: List[str]
    """
    firstRow = set("qwertyuiop")
    secondRow = set("asdfghjkl")
    thirdRow = set("zxcvbnm")
    
    output = []
    
    for word in words:
      subsetWord = set(word.lower())
      if subsetWord.issubset(firstRow) or subsetWord.issubset(secondRow) or subsetWord.issubset(thirdRow):
        output.append(word)
    
    return output