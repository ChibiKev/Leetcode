class Solution(object):
  def reverseVowels(self, s):
    """
    :type s: str
    :rtype: str
    """
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    myList = list(s)
    start = 0
    end = len(myList) - 1
    
    while start < end:
      while start < end and myList[start] not in vowels:
        start += 1
      while end > start and myList[end] not in vowels:
        end -= 1
      temp = myList[start]
      myList[start] = myList[end]
      myList[end] = temp
      start += 1
      end -= 1
    
    return ''.join(myList)