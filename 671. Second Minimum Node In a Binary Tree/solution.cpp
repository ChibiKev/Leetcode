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
  int dfs(TreeNode* current, int lowest){
    if (current == nullptr){
      return -1;
    }
    if (lowest < current->val){
      return current->val;
    }
    int left = dfs(current->left, lowest);
    int right = dfs(current->right, lowest);

    if (left > lowest || right > lowest){
      int currentLowest = left;
      if ((right < currentLowest && right != -1) || left == -1){
        currentLowest = right;
      }
      return currentLowest;
    }
    return -1;
  }
public:
  int findSecondMinimumValue(TreeNode* root) {
    return dfs(root, root->val);
  }
};