class Solution(object):
  def digitSum(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: str
    """
    result = ""
    while(len(s) > k):
      total = 0
      for index, value in enumerate(s):
        if index != 0 and index % k == 0:
          result += str(total)
          total = 0
        total += int(value)
      result += str(total)
      s = result
      result = ""

    return s