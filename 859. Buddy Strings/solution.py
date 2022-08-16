class Solution(object):
  def buddyStrings(self, s, goal):
    """
    :type s: str
    :type goal: str
    :rtype: bool
    """
    if len(s) != len(goal):
      return False
    if s == goal and len(set(s)) < len(s):
      return True
    
    difference = []
    for index in range(len(s)):
      if s[index] != goal[index]:
        difference.append(index)
        
    return len(difference) == 2 and s[difference[0]] == goal[difference[1]] and s[difference[1]] == goal[difference[0]]