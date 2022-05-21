class Solution(object):
  def countGoodTriplets(self, arr, a, b, c):
    """
    :type arr: List[int]
    :type a: int
    :type b: int
    :type c: int
    :rtype: int
    """
    sizeOfArr = len(arr)
    count = 0
    for i in range(sizeOfArr - 2):
      for j in range(i + 1, sizeOfArr - 1):
        for k in range(j + 1, sizeOfArr):
          if (abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c):
            count += 1
    return count