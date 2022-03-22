class Solution(object):
  def sortEvenOdd(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    oddIndex = []
    evenIndex = []
    for index, num in enumerate(nums):
      if index % 2 == 0:
        evenIndex.append(num)
      else:
        oddIndex.append(num)
        
    oddIndex.sort(reverse = True)
    evenIndex.sort()
    
    result = []
    for even, odd in zip(evenIndex, oddIndex):
      result.append(even)
      result.append(odd)
      
    if len(nums) % 2 != 0:
      result.append(evenIndex[-1])
      
    return result