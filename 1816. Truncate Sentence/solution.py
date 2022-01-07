class Solution(object):
  def truncateSentence(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: str
    """
    seperateToList = s.split(" ")
    modifiedList = seperateToList[:k]
    result = " ".join(modifiedList)
    return result