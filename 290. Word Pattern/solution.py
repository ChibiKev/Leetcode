class Solution(object):
  def wordPattern(self, pattern, s):
    """
    :type pattern: str
    :type s: str
    :rtype: bool
    """
    sList = s.split(" ")
    if len(sList) != len(pattern):
      return False

    patternDictionary = {}
    wordDictionary = {}

    for index, word in enumerate(sList):
      letter = pattern[index]
      if letter in patternDictionary:
        if patternDictionary[letter] != word:
          return False
      else:
        if word in wordDictionary:
          if wordDictionary[word] != letter:
            return False
        patternDictionary[letter] = word
        wordDictionary[word] = letter

    return True