class Solution(object):
  def maximumUnits(self, boxTypes, truckSize):
    """
    :type boxTypes: List[List[int]]
    :type truckSize: int
    :rtype: int
    """
    sortedBoxTypes = sorted(boxTypes, key = lambda x: x[1], reverse = True)
    count = 0
    result = 0
    for box in sortedBoxTypes:
      if count + box[0] < truckSize:
        result += box[0] * box[1]
        count += box[0]
      else:
        result += (truckSize - count) * box[1]
        break
    return result