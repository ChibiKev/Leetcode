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
  int dfs(TreeNode* current, int low, int high){
    if (current == nullptr){
      return 0;
    }
    int total = 0;
    if (low <= current->val && current->val <= high){
      total += current->val;
    }
    int leftTotal = dfs(current->left, low, high);
    int rightTotal = dfs(current->right, low, high);
    return total + leftTotal + rightTotal;
  }
public:
  int rangeSumBST(TreeNode* root, int low, int high) {
    return dfs(root, low, high);
  }
};