class Solution(object):
  def strongPasswordCheckerII(self, password):
    """
    :type password: str
    :rtype: bool
    """
    if len(password) < 8:
      return False

    upper = False
    lower = False
    digit = False
    special = False
    same = True
    
    for index, value in enumerate(password):
      if value >= 'a' and value <= 'z':
        lower = True
      if value >= 'A' and value <= 'Z':
        upper = True
      if value.isdigit():
        digit = True
      if not value.isdigit() and not value.isalnum():
        special = True
      if index < len(password) - 1 and value == password[index + 1]:
        same = False
    
    if upper and lower and digit and special and same: 
      return True
    return False