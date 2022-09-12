class Solution {
public:
  bool isPathCrossing(string path) {
    int x = 0;
    int y = 0;

    set<pair<int, int>> mySet;
    mySet.insert({0, 0});

    for (int index = 0; index < path.size(); index++){
      char letter = path[index];
      if (letter == 'N'){
        y += 1;
      }
      else if (letter == 'S'){
        y -= 1;      
      }
      else if (letter == 'E'){
        x += 1;
      }
      else if (letter == 'W'){
        x -= 1;
      }
      pair<int, int> current = {x, y};
      if (mySet.find(current) != mySet.end()){
        return true;      
      }
      mySet.insert(current);
    }

    return false;
  }
};