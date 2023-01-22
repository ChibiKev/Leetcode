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
  TreeNode* dfs(TreeNode* &current){
    if (current == nullptr){
      return current;
    }
    TreeNode* temp = current->left;
    current->left = dfs(current->right);
    current->right = dfs(temp);
    return current;
  }
public:
  TreeNode* invertTree(TreeNode* root) {
    return dfs(root);
  }
};