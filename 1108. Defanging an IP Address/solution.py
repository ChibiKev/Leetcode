class Solution(object):
  def defangIPaddr(self, address):
    """
    :type address: str
    :rtype: str
    """
    newAddress = ""
    for character in address:
      if character == '.':
        newAddress += "[.]"
      else:
        newAddress += character
    return newAddress