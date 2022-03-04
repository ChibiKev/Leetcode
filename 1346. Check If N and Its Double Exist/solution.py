class Solution(object):
  def checkIfExist(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    arrSet = set(arr)
    zero = 0
    for num in arr:
      if num == 0 and zero == 0:
        zero = 1
        continue
      if num * 2 in arrSet:
        return True
      
    return False