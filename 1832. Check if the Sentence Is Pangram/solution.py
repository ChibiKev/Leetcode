class Solution(object):
  def checkIfPangram(self, sentence):
    """
    :type sentence: str
    :rtype: bool
    """
    mySet = set()
    for letter in sentence:
      mySet.add(letter)
    
    return len(mySet) == 26