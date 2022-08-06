class Solution(object):
  def reformatDate(self, date):
    """
    :type date: str
    :rtype: str
    """
    month = {
      "Jan" : "01",
      "Feb" : "02",
      "Mar" : "03",
      "Apr" : "04",
      "May" : "05",
      "Jun" : "06",
      "Jul" : "07",
      "Aug" : "08",
      "Sep" : "09",
      "Oct" : "10",
      "Nov" : "11",
      "Dec" : "12"
    }
        
    if len(date) == 13:
      return date[-4:] + "-" + month[date[-8:-5]] + "-" + date[:2]
    
    return date[-4:] + "-" + month[date[-8:-5]] + "-0" + date[0]