class Solution(object):
  def reverseOnlyLetters(self, s):
    """
    :type s: str
    :rtype: str
    """
    myList = list(s)
    start = 0
    end = len(s) - 1
    
    while start < end:
      if not myList[start].isalpha():
        start += 1
      elif not myList[end].isalpha():
        end -= 1
      else:
        temp = myList[start]
        myList[start] = myList[end]
        myList[end] = temp
        start += 1
        end -= 1
    
    return "".join(myList)