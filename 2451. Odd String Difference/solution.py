class Solution(object):
  def oddString(self, words):
    """
    :type words: List[str]
    :rtype: str
    """
    dictionary = {}
    for word in words:
      calc = []
      for index in range(1, len(word)):
        difference = ord(word[index]) - ord(word[index - 1])
        calc.append(difference)
      stringCalc = str(calc)
      if stringCalc not in dictionary:
        dictionary[stringCalc] = [word]
      else:
        dictionary[stringCalc].append(word)
    
    for difference in dictionary:
      if len(dictionary[difference]) == 1:
        return dictionary[difference][0]