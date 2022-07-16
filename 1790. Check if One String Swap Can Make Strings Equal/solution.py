class Solution(object):
  def areAlmostEqual(self, s1, s2):
    """
    :type s1: str
    :type s2: str
    :rtype: bool
    """
    different = []
    for index in range(len(s1)):
      if s1[index] != s2[index]:
        different.append(index)
      if len(different) > 2:
        return False
    return len(different) == 0 or (len(different) == 2 and s1[different[0]] == s2[different[1]] and s1[different[1]] == s2[different[0]])