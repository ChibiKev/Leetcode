class Solution(object):
  def countValidWords(self, sentence):
    """
    :type sentence: str
    :rtype: int
    """
    pattern = re.compile(r'(^[a-z]+(-[a-z]+)?)?[,.!]?$')
    
    count = 0
    for word in sentence.split():
      if pattern.match(word):
        count += 1
        
    return count