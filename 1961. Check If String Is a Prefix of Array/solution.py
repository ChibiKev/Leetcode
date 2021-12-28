class Solution(object):
  def isPrefixString(self, s, words):
    """
    :type s: str
    :type words: List[str]
    :rtype: bool
    """
    currentStructure = ""
    for word in words:
      currentStructure = currentStructure + word
      if currentStructure == s:
        return True
      if len(currentStructure) > len(s):
        break
    return False