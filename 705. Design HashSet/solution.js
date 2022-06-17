
var MyHashSet = function() {
  this.size = 1000000;
  this.mySet = new Array(this.size).fill([]);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let index = key % this.size;
  if (!this.contains(key)){
    this.mySet[index].push(key);
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let index = key % this.size;
  if (this.contains(key)){
    this.mySet[index] = this.mySet[index].filter(x => x !== key);
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let index = key % this.size;
  if (this.mySet[index].includes(key)){
    return true;
  }
  return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */