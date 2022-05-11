class Solution(object):
  def countPairs(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    count = 0
    myDict = {}
    for index, num in enumerate(nums):
      if num not in myDict:
        myDict[num] = [index]
      else:
        myDict[num].append(index)
        
    for num in myDict:
      values = myDict[num]
      for index, mainIndex in enumerate(values):
        for otherIndex in values[:index]:
          if (mainIndex * otherIndex) % k == 0:
            count += 1
            
    return count