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
void dfs(TreeNode* current, int &amount){
  if (current->left != NULL){
    if (current->left->left == NULL && current->left->right == NULL){
      amount += current->left->val;
    }
    else{
      dfs(current->left, amount);
    }
  }
  if (current->right != NULL){
    dfs(current->right, amount);
  }
}
public:
  int sumOfLeftLeaves(TreeNode* root) {
    int total = 0;
    dfs(root, total);
    return total;
  }
};