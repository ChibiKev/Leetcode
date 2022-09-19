class Solution(object):
  def decodeMessage(self, key, message):
    """
    :type key: str
    :type message: str
    :rtype: str
    """
    dictionary = {}
    countLetter = 'a'
    for letter in key:
      if letter != ' ' and letter not in dictionary:
        dictionary[letter] = countLetter
        countLetter = chr(ord(countLetter) + 1)
    
    result = ""
    for letter in message:
      if letter != ' ':
        result += dictionary[letter]
      else:
        result += ' '
      
    return result