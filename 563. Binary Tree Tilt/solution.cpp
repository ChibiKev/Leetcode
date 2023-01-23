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
  int totalTilt = 0;
  
  int dfs(TreeNode* current){
    if (current == nullptr){
      return 0;
    }
    int left = dfs(current->left);
    int right = dfs(current->right);
    totalTilt += abs(left - right);
    return current->val + left + right;
  }
public:
  int findTilt(TreeNode* root) {
    dfs(root);
    return totalTilt;
  }
};