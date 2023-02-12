/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let newAddress = "";
  for (let index = 0; index < address.length; index++){
    let character = address[index];
    if (character == '.'){
      newAddress += "[.]";
    }
    else{
      newAddress += character;
    }
  }
  return newAddress;
};