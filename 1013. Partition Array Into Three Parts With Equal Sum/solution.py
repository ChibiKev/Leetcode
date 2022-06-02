class Solution(object):
  def canThreePartsEqualSum(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    left = arr[0]
    right = arr[-1]
    total = 0
    for num in arr:
      total += num
    
    if total % 3 != 0:
      return False
    
    leftIndex = 1
    rightIndex = len(arr) - 2
    average = total / 3
    while leftIndex < rightIndex:
      if leftIndex < rightIndex and left != average:
        left += arr[leftIndex]
        leftIndex += 1
      if leftIndex < rightIndex and right != average:
        right += arr[rightIndex]
        rightIndex -= 1
      if left == average and right == average:
        return True
    return False