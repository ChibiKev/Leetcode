class Solution {
public:
  bool isLongPressedName(string name, string typed) {
    int nameIndex = 0;

    for (int index = 0; index < typed.size(); index++){
      char letter = typed[index];
      if (nameIndex < name.size()){
        if (name[nameIndex] == letter){
          nameIndex += 1;
          continue;
        }
      }
      if (index == 0 || letter != typed[index - 1]){
        return false;
      }
    }

    return nameIndex == name.size();
  }
};