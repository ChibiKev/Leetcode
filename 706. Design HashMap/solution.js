
var MyHashMap = function() {
  this.size = 1000000;
  this.dictionary = new Array(this.size).fill([]);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let dictionary = this.dictionary[key % this.size];
  let dictionaryIndex = -1;
  for (let index = 0; index < dictionary.length; index++){
    let num = dictionary[index];
    if (num){
      if (num[0] == key){
        dictionaryIndex = index;
        break;
      }
    }
  }

  if (dictionaryIndex !== -1){
    dictionary[dictionaryIndex][1] = value;
  }
  else{
    dictionary.push([key, value]);
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let dictionary = this.dictionary[key % this.size];
  let dictionaryIndex = -1;
  for (let index = 0; index < dictionary.length; index++){
    let num = dictionary[index];
    if (num){
      if (num[0] == key){
        dictionaryIndex = index;
        break;
      }
    }
  }
  
  if (dictionaryIndex === -1){
    return -1;
  }
  return dictionary[dictionaryIndex][1];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  let dictionary = this.dictionary[key % this.size];
  let dictionaryIndex = -1;
  for (let index = 0; index < dictionary.length; index++){
    let num = dictionary[index];
    if (num){
      if (num[0] == key){
        dictionaryIndex = index;
        break;
      }
    }
  }

  if (dictionaryIndex === -1){
    return;
  }
  delete dictionary[dictionaryIndex];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */