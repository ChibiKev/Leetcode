bool sortColumn( const vector<int>& v1, const vector<int>& v2 ) {
  return v1[1] > v2[1];
}

class Solution {
public:
  int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
    sort(boxTypes.begin(), boxTypes.end(), sortColumn);
    int count = 0;
    int result = 0;
    for (int index = 0; index < boxTypes.size(); index++){
      vector<int> box = boxTypes[index];
      if (count + box[0] < truckSize){
        result += box[0] * box[1];
        count += box[0];
      }
      else{
        result += (truckSize - count) * box[1];
        break;
      }
    }
    return result;
  }
};