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
  void dfs(TreeNode* current, vector<int> &array){
    if (current != nullptr){
      array.push_back(current->val);
      dfs(current->left, array);
      dfs(current->right, array);
    }
  }
public:
  vector<int> preorderTraversal(TreeNode* root) {
    vector<int> result;
    dfs(root, result);
    return result;
  }
};