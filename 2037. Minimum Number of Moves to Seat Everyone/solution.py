class Solution(object):
  def minMovesToSeat(self, seats, students):
    """
    :type seats: List[int]
    :type students: List[int]
    :rtype: int
    """
    sortedSeats = sorted(seats)
    sortedStudents = sorted(students)
    
    result = 0
    
    for seat, student in zip(sortedSeats, sortedStudents):
      movements = abs(seat - student)
      result += movements
      
    return result