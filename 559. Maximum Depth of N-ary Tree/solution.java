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
  int dfs(Node current, int depth){
    if (current == null){
      return depth - 1;
    }
    int maxDepth = depth;
    for (int index = 0; index < current.children.size(); index++){
      Node child = current.children.get(index);
      int currentDepth = dfs(child, depth + 1);
      if (currentDepth > maxDepth){
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
  public int maxDepth(Node root) {
    return dfs(root, 1);
  }
}