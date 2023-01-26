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
  TreeNode* dfs(TreeNode* current, TreeNode* current2){
    if (current != nullptr && current2 != nullptr){
      current->val += current2->val;
      current->left = dfs(current->left, current2->left);
      current->right = dfs(current->right, current2->right);
      return current;
    }
    if (current != nullptr){
      return current;
    }
    return current2;
  }
public:
  TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {
    return dfs(root1, root2);
  }
};