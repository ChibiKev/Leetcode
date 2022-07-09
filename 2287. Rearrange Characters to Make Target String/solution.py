class Solution(object):
  def rearrangeCharacters(self, s, target):
    """
    :type s: str
    :type target: str
    :rtype: int
    """
    if len(target) > len(s):
      return 0
    
    sDictionary = {}
    for letter in s:
      if letter not in sDictionary:
        sDictionary[letter] = 1
      else:
        sDictionary[letter] += 1
        
    targetDictionary = {}
    for letter in target:
      if letter not in targetDictionary:
        targetDictionary[letter] = 1
      else:
        targetDictionary[letter] += 1
        
    result = float('inf')
    for letter in targetDictionary:
      if letter in sDictionary:
        result = min(result, sDictionary[letter] // targetDictionary[letter])
      else:
        return 0

    return result