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
  bool dfs(TreeNode* current, TreeNode* subCurrent){
    if (current == nullptr || subCurrent == nullptr){
      return current == nullptr && subCurrent == nullptr;
    }
    return current->val == subCurrent->val && dfs(current->left, subCurrent->left) && dfs(current->right, subCurrent->right);
  }
public:
  bool isSameTree(TreeNode* p, TreeNode* q) {
    return dfs(p, q);
  }
};