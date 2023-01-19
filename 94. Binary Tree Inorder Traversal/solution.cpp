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
  vector<int> dfs(TreeNode* current, vector<int> &array){
    if (current == nullptr){
      return array;
    }
    array = dfs(current->left, array);
    array.push_back(current->val);
    array = dfs(current->right, array);
    return array;
  }
public:
  vector<int> inorderTraversal(TreeNode* root) {
    vector<int> result;
    return dfs(root, result);
  }
};