class Solution(object):
  def reformat(self, s):
    """
    :type s: str
    :rtype: str
    """
    digits = ""
    alphas = ""
    
    for value in s:
      if value.isdigit():
        digits += value
      elif value.isalpha():
        alphas += value
    
    result = ""
    
    if abs(len(digits) - len(alphas)) > 1:
      return result
    elif len(digits) > len(alphas):
      for index in range(len(digits)):
        result += digits[index]
        if index < len(alphas):
          result += alphas[index]
    else:
      for index in range(len(alphas)):
        result += alphas[index]
        if index < len(digits):
          result += digits[index]
          
    return result