/*
// Definition for a Node.
class Node {
public:
  int val;
  vector<Node*> children;

  Node() {}

  Node(int _val) {
    val = _val;
  }

  Node(int _val, vector<Node*> _children) {
    val = _val;
    children = _children;
  }
};
*/

class Solution {
  int dfs(Node* current, int depth){
    if (current == NULL){
      return depth - 1;
    }
    int maxDepth = depth;
    for (int index = 0; index < current->children.size(); index++){
      Node* child = current->children[index];
      int currentDepth = dfs(child, depth + 1);
      if (currentDepth > maxDepth){
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
public:
  int maxDepth(Node* root) {
    return dfs(root, 1);
  }
};