/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
  TreeNode* dfs(TreeNode* original, TreeNode* cloned, TreeNode* target){
    if (original == NULL){
      return NULL;
    }
    if (original == target){
      return cloned;
    }
    TreeNode* left = dfs(original->left, cloned->left, target);
    TreeNode* right = dfs(original->right, cloned->right, target);
    if (left){
      return left;
    }
    else if (right){
      return right;
    }
    return NULL;
  }
public:
  TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
    return dfs(original, cloned, target);
  }
};