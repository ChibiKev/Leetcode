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
  bool dfs(TreeNode* current, int amount, int targetSum){
    if (current == NULL){
      return false;
    }
    amount += current->val;
    if (current->left == NULL && current->right == NULL && amount == targetSum){
      return true;
    }
    return dfs(current->left, amount, targetSum) || dfs(current->right, amount, targetSum);
  }
public:
  bool hasPathSum(TreeNode* root, int targetSum) {
    int total = 0;
    return dfs(root, total, targetSum);
  }
};