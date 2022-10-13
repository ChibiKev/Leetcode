class Solution(object):
  def repeatedCharacter(self, s):
    """
    :type s: str
    :rtype: str
    """
    mySet = set()
    for letter in s:
      if letter in mySet:
        return letter
      else:
        mySet.add(letter)