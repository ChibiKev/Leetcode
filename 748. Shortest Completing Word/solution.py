class Solution(object):
  def shortestCompletingWord(self, licensePlate, words):
    """
    :type licensePlate: str
    :type words: List[str]
    :rtype: str
    """
    licensePlateDictionary = {}
    for letter in licensePlate:
      if letter.isalpha():
        lowerCaseletter = letter.lower()
        if not lowerCaseletter in licensePlateDictionary:
          licensePlateDictionary[lowerCaseletter] = 1
        else:
          licensePlateDictionary[lowerCaseletter] += 1
    
    maxValue = 0
    maxWord = ""
    for word in words:
      count = 0
      dictionary = licensePlateDictionary.copy()
      for letter in word:
        if dictionary.get(letter) > 0:
          count += 1
          dictionary[letter] -= 1
      if count > maxValue:
        maxValue = count
        maxWord = word
      elif count == maxValue and len(maxWord) > len(word):
        maxValue = count
        maxWord = word
          
          
    return maxWord