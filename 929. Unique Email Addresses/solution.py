class Solution(object):
  def numUniqueEmails(self, emails):
    """
    :type emails: List[str]
    :rtype: int
    """
    result = set()
    
    for email in emails:
      seperatedEmail = email.split("@")
      localName = seperatedEmail[0].split('+')[0].replace('.', '')
      newEmail = localName + '@' + seperatedEmail[1]
      result.add(newEmail)
      
    return len(result)