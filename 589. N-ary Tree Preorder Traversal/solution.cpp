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
  void dfs(Node* current, vector<int> &array){
    if (current == NULL){
      return;
    }
    array.push_back(current->val);
    for (int index = 0; index < current->children.size(); index++){
      dfs(current->children[index], array);
    }
  }
public:
  vector<int> preorder(Node* root) {
    vector<int> result;
    dfs(root, result);
    return result;
  }
};