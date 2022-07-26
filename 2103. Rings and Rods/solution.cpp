class Solution {
public:
  int countPoints(string rings) {
    vector<int> red {0,0,0,0,0,0,0,0,0,0};
    vector<int> green {0,0,0,0,0,0,0,0,0,0};
    vector<int> blue {0,0,0,0,0,0,0,0,0,0};

    int index = 0;
    while (index < rings.size()){
      char letter = rings[index];
      int value = rings[index + 1] - '0';
      if (letter == 'R'){
        red[value] += 1;
      }
      else if (letter == 'G'){
        green[value] += 1;
      }
      else if (letter == 'B'){
        blue[value] += 1;
      }
      index += 2;
    }

    int count = 0;
    for (int index = 0; index < 10; index++){
      if (red[index] > 0 && green[index] > 0 && blue[index] > 0){
        count += 1;
      }
    }

    return count;
  }
};