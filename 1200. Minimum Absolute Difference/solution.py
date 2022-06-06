class Solution(object):
  def minimumAbsDifference(self, arr):
    """
    :type arr: List[int]
    :rtype: List[List[int]]
    """
    absoluteDifference = float('inf')
    result = []
    arr.sort()
    for index in range(len(arr) - 1):
      if arr[index + 1] - arr[index] < absoluteDifference:
        result = [[arr[index], arr[index + 1]]]
        absoluteDifference = arr[index + 1] - arr[index]
      elif arr[index + 1] - arr[index] == absoluteDifference:
        result.append([arr[index], arr[index + 1]])
        
    return result