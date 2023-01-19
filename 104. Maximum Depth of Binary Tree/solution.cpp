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
  int dfs(TreeNode* current){
    if (current == nullptr){
      return 0;
    }
    int leftDepth = dfs(current->left);
    int rightDepth = dfs(current->right);
    int maxDepth = leftDepth;
    if (rightDepth > maxDepth){
      maxDepth = rightDepth;
    }
    return maxDepth + 1;
  }
public:
  int maxDepth(TreeNode* root) {
    return dfs(root);
  }
};