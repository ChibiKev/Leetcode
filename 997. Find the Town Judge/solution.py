class Solution(object):
  def findJudge(self, n, trust):
    """
    :type n: int
    :type trust: List[List[int]]
    :rtype: int
    """
    trustedPeople = [0] * n
    for connection in trust:
      person = connection[0]
      trusted = connection[1]
      trustedPeople[person - 1] -= 1
      trustedPeople[trusted - 1] += 1
      
    for index, people in enumerate(trustedPeople):
      if people == n - 1:
        return index + 1
      
    return -1