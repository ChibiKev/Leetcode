class Solution(object):
  def distributeCandies(self, candies, num_people):
    """
    :type candies: int
    :type num_people: int
    :rtype: List[int]
    """
    people = [0] * num_people
    amount = 1
    current = 0
    while(True):
      if current == num_people:
        current = 0
      if amount > candies:
        people[current] += candies
        break
      else:
        people[current] += amount
        candies -= amount
        current += 1
        amount += 1
    return people