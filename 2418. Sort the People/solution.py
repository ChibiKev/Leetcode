class Solution(object):
  def sortPeople(self, names, heights):
    """
    :type names: List[str]
    :type heights: List[int]
    :rtype: List[str]
    """
    dictionary = {}
    for name, height in zip(names, heights):
      dictionary[height] = name
      
    result = []
    for height in sorted(heights, reverse = True):
      result.append(dictionary[height])

    return result