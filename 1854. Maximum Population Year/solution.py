class Solution(object):
  def maximumPopulation(self, logs):
    """
    :type logs: List[List[int]]
    :rtype: int
    """
    years = [0] * 101
    for log in logs:
      birth = log[0]
      death = log[1]
      years[birth - 1950] += 1
      years[death - 1950] -= 1
    
    count = 0
    maxCount = 0
    maxYear = 0
    for index, year in enumerate(years):
      count += year
      if count > maxCount:
        maxCount = count
        maxYear = index
        
    return 1950 + maxYear