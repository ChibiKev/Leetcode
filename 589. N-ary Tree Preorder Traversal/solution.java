/*
// Definition for a Node.
class Node {
  public int val;
  public List<Node> children;

  public Node() {}

  public Node(int _val) {
    val = _val;
  }

  public Node(int _val, List<Node> _children) {
    val = _val;
    children = _children;
  }
};
*/

class Solution {
  void dfs(Node current, List<Integer> array){
    if (current == null){
      return;
    }
    array.add(current.val);
    for (int index = 0; index < current.children.size(); index++){
      dfs(current.children.get(index), array);
    }
  }
  public List<Integer> preorder(Node root) {
    List<Integer> result = new ArrayList<Integer>();
    dfs(root, result);
    return result;
  }
}