class Solution(object):
  def nextGreatestLetter(self, letters, target):
    """
    :type letters: List[str]
    :type target: str
    :rtype: str
    """
    if target >= letters[-1]:
      return letters[0]
    
    for letter in letters:
      if target < letter:
        return letter