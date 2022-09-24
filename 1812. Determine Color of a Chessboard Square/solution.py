class Solution(object):
  def squareIsWhite(self, coordinates):
    """
    :type coordinates: str
    :rtype: bool
    """
    letter = ord(coordinates[0]) - 97
    number = int(coordinates[1])
    return (letter + number) % 2 == 0