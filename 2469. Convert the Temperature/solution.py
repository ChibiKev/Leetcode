class Solution(object):
  def convertTemperature(self, celsius):
    """
    :type celsius: float
    :rtype: List[float]
    """
    fahrenheit = celsius * 1.8 + 32.00
    kelvin = celsius + 273.15
    return [kelvin, fahrenheit]