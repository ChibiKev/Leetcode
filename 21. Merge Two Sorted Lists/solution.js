/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let result = new ListNode();
  let headResult = result;
  while (list1 != undefined && list2 != undefined){
    if (list1.val < list2.val){
      result.next = list1;
      list1 = list1.next;
      result = result.next;
    }
    else{
      result.next = list2;
      list2 = list2.next;
      result = result.next;
    }
  }
  
  if (list1 != undefined){
    result.next = list1;
  }
  else if (list2 != undefined){
    result.next = list2;
  }
  
  return headResult.next;
};