class Solution(object):
  def isPrefixOfWord(self, sentence, searchWord):
    """
    :type sentence: str
    :type searchWord: str
    :rtype: int
    """
    word = 1
    search = 0
    jump = False
    
    for letter in sentence:
      if jump and letter != " ":
        continue
      elif letter == " ":
        jump = False
        search = 0
        word += 1
        continue
      if letter == searchWord[search]:
        search += 1
      else:
        jump = True
        search = 0
      if search == len(searchWord):
        return word
      
    return -1