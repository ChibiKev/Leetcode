class Solution(object):
  def distanceBetweenBusStops(self, distance, start, destination):
    """
    :type distance: List[int]
    :type start: int
    :type destination: int
    :rtype: int
    """
    travel = 0
    total = 0
    
    begin = start
    end = destination
    
    if begin > end:
      temp = begin
      begin = end
      end = temp
    
    
    for index, number in enumerate(distance):
      if index >= begin and index < end:
        travel += number
      total += number
      
    return min(travel, total - travel)