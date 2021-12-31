class Solution(object):
  def findRestaurant(self, list1, list2):
    """
    :type list1: List[str]
    :type list2: List[str]
    :rtype: List[str]
    """
    firstDictionary = {}
    secondDictionary = {}
    for index, value in enumerate(list1):
      firstDictionary[value] = index
        
    for index, value in enumerate(list2):
      if value in firstDictionary:
        secondDictionary[value] = firstDictionary[value] + index

    minimum = []
    minimumValue = float('inf')
    for key in secondDictionary:
      if secondDictionary[key] == minimumValue:
        minimum.append(key)
      elif secondDictionary[key] < minimumValue:
        minimum = [key]
        minimumValue = secondDictionary[key]
    return minimum