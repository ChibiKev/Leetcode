class Solution {
  public boolean haveConflict(String[] event1, String[] event2) {
    int event1Start = (Integer.parseInt(event1[0].substring(0,2)) * 60) + Integer.parseInt(event1[0].substring(3,5));
    int event1End = (Integer.parseInt(event1[1].substring(0,2)) * 60) + Integer.parseInt(event1[1].substring(3,5));
    int event2Start = (Integer.parseInt(event2[0].substring(0,2)) * 60) + Integer.parseInt(event2[0].substring(3,5));
    int event2End = (Integer.parseInt(event2[1].substring(0,2)) * 60) + Integer.parseInt(event2[1].substring(3,5));

    if (event1Start <= event2Start && event2Start <= event1End){
      return true;
    }
    else if (event1Start <= event2End && event2End <= event1End){
      return true;
    }
    else if (event2Start <= event1Start && event1Start <= event2End){
      return true;
    }
    else if (event2Start <= event1End && event1End <= event2End){
      return true;
    }
    
    return false;
  }
}