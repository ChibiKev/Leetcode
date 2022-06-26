class Solution(object):
  def areNumbersAscending(self, s):
    """
    :type s: str
    :rtype: bool
    """
    words = s.split()
    lastNumber = -1
    for word in words:
      if word.isdigit():
        if int(word) > lastNumber:
          lastNumber = int(word)
        else:
          return False
        
    return True