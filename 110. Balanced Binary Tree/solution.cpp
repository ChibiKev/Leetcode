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
    if (current == NULL){
      return 0;
    }
    int leftHeight = dfs(current->left);
    int rightHeight = dfs(current->right);
    int difference = abs(leftHeight - rightHeight);
    if (leftHeight == -1 || rightHeight == -1 || difference > 1){
      return -1;
    }
    int maximum = leftHeight;
    if (rightHeight > maximum){
      maximum = rightHeight;
    }
    return maximum + 1;
  }
public:
  bool isBalanced(TreeNode* root) {
    return dfs(root) >= 0;
  }
};