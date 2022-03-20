class Solution(object):
  def findTheDistanceValue(self, arr1, arr2, d):
    """
    :type arr1: List[int]
    :type arr2: List[int]
    :type d: int
    :rtype: int
    """
    arr1.sort()
    arr2.sort()
    arr1Index = 0
    arr2Index = 0
    result = 0
    while arr1Index < len(arr1) and arr2Index < len(arr2):
      arr1Num = arr1[arr1Index]
      arr2Num = arr2[arr2Index]
      if abs(arr1Num - arr2Num) > d:
        if arr1Num >= arr2Num:
          arr2Index += 1
          continue
        else:
          result += 1
      arr1Index += 1
        
    result += len(arr1) - arr1Index
    return result