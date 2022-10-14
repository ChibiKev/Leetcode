class Solution(object):
  def greatestLetter(self, s):
    """
    :type s: str
    :rtype: str
    """
    mySet = set(s)

    lowercaseLetter = ord('z')
    uppercaseLetter = ord('Z')

    for index in range(26):
			if chr(uppercaseLetter - index) in mySet and chr(lowercaseLetter - index) in mySet:
			  return chr(uppercaseLetter - index)
		
    return ''