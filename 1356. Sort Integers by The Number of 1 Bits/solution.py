class Solution(object):  
  def sortByBits(self, arr):
    """
    :type arr: List[int]
    :rtype: List[int]
    """
    arr.sort()
    arr.sort(key = lambda result: bin(result).replace('0', ''))
    return arr