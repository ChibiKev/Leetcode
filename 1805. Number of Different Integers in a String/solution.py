class Solution(object):
  def numDifferentIntegers(self, word):
    """
    :type word: str
    :rtype: int
    """
    setOfNumbers = set()
    
    index = 0
    while index < len(word):
      if word[index].isdigit():
        number = ""
        while index < len(word) and word[index] == '0':
          index += 1
        while index < len(word) and word[index].isdigit():
          number += word[index]
          index += 1
        setOfNumbers.add(number)
      index += 1
    
    return len(setOfNumbers)