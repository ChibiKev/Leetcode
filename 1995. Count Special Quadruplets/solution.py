class Solution(object):
  def countQuadruplets(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    result = 0
    numsLength = len(nums)

    count = {}
    count[nums[-1] - nums[-2]] = 1

    for b in range(numsLength - 3, 0, -1):
      for a in range(b - 1, -1, -1):
        if nums[a] + nums[b] in count:
          result += count[nums[a] + nums[b]]

      for x in range(numsLength - 1, b, -1):
        if nums[x] - nums[b] in count:
          count[nums[x] - nums[b]] += 1
        else:
          count[nums[x] - nums[b]] = 1

    return result