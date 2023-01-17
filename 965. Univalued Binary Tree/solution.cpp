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
    bool left = true;
    if (current->left != nullptr){
      left = current->val == current->left->val && dfs(current->left);
    }
    bool right = true;
    if (current->right != nullptr){
      right = current->val == current->right->val && dfs(current->right);
    }
    return left && right;
  }
public:
  bool isUnivalTree(TreeNode* root) {
    return dfs(root);
  }
};