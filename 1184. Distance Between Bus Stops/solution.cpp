class Solution {
public:
  int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
    int travel = 0;
    int total = 0;

    int begin = start;
    int end = destination;

    if (begin > end){
      int temp = begin;
      begin = end;
      end = temp;
    }

    for (int index = 0; index < distance.size(); index++){
      int number = distance[index];
      if (index >= begin && index < end){
        travel += number;
      }
      total += number;
    }

    return min(travel, total - travel);
  }
};