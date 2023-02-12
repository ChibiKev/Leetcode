class Solution {
  public String defangIPaddr(String address) {
    String newAddress = "";
    for (int index = 0; index < address.length(); index++){
      Character character = address.charAt(index);
      if (character == '.'){
        newAddress += "[.]";
      }
      else{
        newAddress += character;
      }
    }
    return newAddress;
  }
}