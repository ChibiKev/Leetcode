class Solution(object):
  def mergeSimilarItems(self, items1, items2):
    """
    :type items1: List[List[int]]
    :type items2: List[List[int]]
    :rtype: List[List[int]]
    """
    dictionary = {}
    for item in items1:
      if item[0] not in dictionary:
        dictionary[item[0]] = item[1]
      else:
        dictionary[item[0]] += item[1]

    for item in items2:
      if item[0] not in dictionary:
        dictionary[item[0]] = item[1]
      else:
        dictionary[item[0]] += item[1]

    ret = []
    for value in sorted(dictionary):
      ret.append([value, dictionary[value]])
    
    return ret