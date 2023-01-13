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
  TreeNode* dfs(TreeNode* current, TreeNode* last){
    if (current == nullptr){
      return last;
    }
    TreeNode* result = dfs(current->left, current);
    current->left = nullptr;
    current->right = dfs(current->right, last);
    return result;
  }
public:
  TreeNode* increasingBST(TreeNode* root) {
    return dfs(root, nullptr);
  }
};