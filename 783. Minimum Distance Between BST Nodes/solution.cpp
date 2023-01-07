/**
 * Definition for a binary tree node->
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
  int minimumDifference = INT_MAX;
  int value = -1;
  
  void dfs(TreeNode* current){
    if (current == NULL){
      return;
    }
    dfs(current->left);
    if (value != -1){
      int difference = abs(current->val - value);
      if (difference < minimumDifference){
        minimumDifference = difference;
      }
    }
    value = current->val;
    dfs(current->right);
  }
public:
  int minDiffInBST(TreeNode* root) {
    dfs(root);
    return minimumDifference; 
  }
};