class Solution(object):
  def backspaceCompare(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    newS = ""
    for letter in s:
      if letter != "#":
        newS += letter
      else:
        newS = newS[:-1]
        
    newT = ""
    for letter in t:
      if letter != "#":
        newT += letter
      else:
        newT = newT[:-1]
        
    return newS == newT