class Solution {
  public String reformatDate(String date) {
    Map<String, String> month = new HashMap<String, String>(){{
      put("Jan", "01");
      put("Feb", "02");
      put("Mar", "03");
      put("Apr", "04");
      put("May", "05");
      put("Jun", "06");
      put("Jul", "07");
      put("Aug", "08");
      put("Sep", "09");
      put("Oct", "10");
      put("Nov", "11");
      put("Dec", "12");
    }};

    if (date.length() == 13){
      return date.substring(date.length() - 4, date.length())  + "-" + month.get(date.substring(date.length() - 8, date.length() - 5)) + "-" + date.substring(0, 2);
    }

    return date.substring(date.length() - 4, date.length()) + "-" + month.get(date.substring(date.length() - 8, date.length() - 5)) + "-0" + date.charAt(0);
  }
}