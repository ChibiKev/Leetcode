class Solution {
public:
  vector<double> convertTemperature(double celsius) {
    double fahrenheit = celsius * 1.8 + 32.00;
    double kelvin = celsius + 273.15;
    return {kelvin, fahrenheit};
  }
};