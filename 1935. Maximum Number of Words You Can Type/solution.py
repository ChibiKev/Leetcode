class Solution(object):
  def canBeTypedWords(self, text, brokenLetters):
    """
    :type text: str
    :type brokenLetters: str
    :rtype: int
    """
    letterSet = set(brokenLetters)
    count = 0
    word = False
    for index, letter in enumerate(text):
      if word and letter != " ":
        continue
      if letter in letterSet:
        word = True
      if letter == " " or index == len(text) - 1:
        if word == False:
          count += 1
        word = False
        
    return count