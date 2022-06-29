class Solution(object):
  def isPalindrome(self, s):
    """
    :type s: str
    :rtype: bool
    """
    word = ""
    for letter in s:
      if letter.isalnum():
        word += letter
    word = word.lower()
    for index in range(len(word) / 2):
      startLetter = word[index]
      endLetter = word[len(word) - index - 1]
      if startLetter != endLetter:
        return False
      
    return True