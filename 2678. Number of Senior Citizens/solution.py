class Solution(object):
  def countSeniors(self, details):
    """
    :type details: List[str]
    :rtype: int
    """
    result = 0
    for detail in details:
      if int(detail[11:13]) > 60:
        result += 1
    return result