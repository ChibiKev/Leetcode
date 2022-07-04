class Solution(object):
  def isIsomorphic(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    sDictionary = {}
    tDictionary = {}
    
    for index in range(len(s)):
      sLetter = s[index]
      tLetter = t[index]
      if sLetter in sDictionary:
        if sDictionary[sLetter] != tLetter:
          return False
      else:
        sDictionary[sLetter] = tLetter
      if tLetter in tDictionary:
        if tDictionary[tLetter] != sLetter:
          return False
      else:
        tDictionary[tLetter] = sLetter
        
    return True