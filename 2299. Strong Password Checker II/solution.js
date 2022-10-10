/**
 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
  if (password.length < 8){
    return false;
  }

  let upper = false;
  let lower = false;
  let digit = false;
  let special = false;
  let same = true;
  
  for (let index = 0; index < password.length; index++){
    let value = password[index];
    if (value >= 'a' && value <= 'z'){
      lower = true;
    }
    if (value >= 'A' && value <= 'Z'){
      upper = true;
    }
    if (!isNaN(value)){
      digit = true;
    }
    if (isNaN(value) && !/^[A-Z]$/i.test(value)){
      special = true;
    }
    if (index < password.length - 1 && value == password[index + 1]){
      same = false;
    }
  }
  
  if (upper && lower && digit && special && same){
    return true;
  }
  return false;
};