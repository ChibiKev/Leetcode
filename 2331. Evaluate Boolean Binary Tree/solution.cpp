/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
bool dfs(TreeNode* current){
  if (current->val == 2){
    return dfs(current->left) || dfs(current->right);
  }
  if (current->val == 3){
    return dfs(current->left) && dfs(current->right);
  }
  return current->val;
}
public:
  bool evaluateTree(TreeNode* root) {
    return dfs(root);
  }
};