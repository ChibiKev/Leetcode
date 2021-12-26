class Solution(object):
  def firstPalindrome(self, words):
    """
    :type words: List[str]
    :rtype: str
    """
    result = ""
    for word in words:
      reverseWord = word[::-1]
      if word == reverseWord:
        result = word
        break
            
    return result