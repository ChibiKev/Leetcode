class Solution(object):
  def reverseWords(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = ""
    word = ""
    for index, letter in enumerate(s):
      if letter != " ":
        word = letter + word
      if letter == " " or index == len(s) - 1:
        result += word
        if index != len(s) - 1:
          result += " "
        word = ""
    
    return result