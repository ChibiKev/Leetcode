class Solution {
  public boolean strongPasswordCheckerII(String password) {
    if (password.length() < 8){
      return false;
    }

    boolean upper = false;
    boolean lower = false;
    boolean digit = false;
    boolean special = false;
    boolean same = true;
    
    for (int index = 0; index < password.length(); index++){
      Character value = password.charAt(index);
      if (Character.isLowerCase(value)){
        lower = true;
      }
      if (Character.isUpperCase(value)){
        upper = true;
      }
      if (Character.isDigit(value)){
        digit = true;
      }
      if ("!@#$%^&*()-+".contains("" + value)){
        special = true;
      }
      if (index < password.length() - 1 && value == password.charAt(index + 1)){
        same = false;
      }
    }
    
    if (upper && lower && digit && special && same){
      return true;
    }
    return false;
  }
}