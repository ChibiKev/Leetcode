class Solution(object):
  def makeGood(self, s):
    """
    :type s: str
    :rtype: str
    """
    myStack = []
    for letter in s:
      if len(myStack) == 0:
        myStack.append(letter)
      elif myStack[-1].isupper() and myStack[-1].lower() == letter:
        myStack.pop()
      elif myStack[-1].islower() and myStack[-1].upper() == letter:
        myStack.pop()
      else:
        myStack.append(letter)
    
    return ''.join(myStack)