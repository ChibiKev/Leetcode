class Solution(object):
  def bestHand(self, ranks, suits):
    """
    :type ranks: List[int]
    :type suits: List[str]
    :rtype: str
    """
    suitsSet = set(suits)
    if len(suitsSet) == 1:
      return "Flush"
    
    ranksDictionary = {}
    for rank in ranks:
      if rank not in ranksDictionary:
        ranksDictionary[rank] = 1
      else:
        ranksDictionary[rank] += 1
    
    result = ""

    for rank in ranksDictionary:
      if ranksDictionary[rank] > 2:
        result = "Three of a Kind"
      elif ranksDictionary[rank] > 1 and result == "":
        result = "Pair"
    
    if result == "":
      result = "High Card"

    return result