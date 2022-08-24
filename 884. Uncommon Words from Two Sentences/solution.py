class Solution(object):
  def uncommonFromSentences(self, s1, s2):
    """
    :type s1: str
    :type s2: str
    :rtype: List[str]
    """
    banned = set()
    uncommon = set()
    
    s1Words = s1.split()
    for word in s1Words:
      if word in uncommon:
        banned.add(word)
        uncommon.remove(word)
      elif word not in banned and word not in uncommon:
        uncommon.add(word)
        
    s2Words = s2.split()
    for word in s2Words:
      if word in uncommon:
        banned.add(word)
        uncommon.remove(word)
      elif word not in banned and word not in uncommon:
        uncommon.add(word)
        
    return uncommon