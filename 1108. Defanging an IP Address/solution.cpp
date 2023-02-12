class Solution {
public:
  string defangIPaddr(string address) {
    string newAddress = "";
    for (int index = 0; index < address.size(); index++){
      char character = address[index];
      if (character == '.'){
        newAddress += "[.]";
      }
      else{
        newAddress += character;
      }
    }
    return newAddress;
  }
};