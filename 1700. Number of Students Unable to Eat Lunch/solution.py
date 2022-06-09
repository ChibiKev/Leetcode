class Solution(object):
  def countStudents(self, students, sandwiches):
    """
    :type students: List[int]
    :type sandwiches: List[int]
    :rtype: int
    """
    count = [0, 0]
    for student in students:
      count[student] += 1
    
    index = 0
    while index < len(students) and count[sandwiches[index]]:
      count[sandwiches[index]] -= 1
      index += 1
    
    return len(students) - index