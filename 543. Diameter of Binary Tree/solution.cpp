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
  int result = 0;
  int dfs(TreeNode* current){
    if (current == nullptr){
      return 0;
    }
    int left = dfs(current->left);
    int right = dfs(current->right);
    
    if (left + right > result){
      result = left + right;
    }

    int maximum = left;
    if (right > maximum){
      maximum = right;
    }
    return maximum + 1;
  }
public:
  int diameterOfBinaryTree(TreeNode* root) {
    dfs(root);
    return result;
  }
};