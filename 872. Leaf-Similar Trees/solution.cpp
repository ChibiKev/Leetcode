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
    if (current->left == NULL && current->right == NULL){
      array.push_back(current->val);
    }
    if (current->left != NULL){
      dfs(current->left, array);
    }
    if (current->right != NULL){
      dfs(current->right, array);
    }
  }
public:
  bool leafSimilar(TreeNode* root1, TreeNode* root2) {
    vector<int> root1Leaf;
    vector<int> root2Leaf;
    dfs(root1, root1Leaf);
    dfs(root2, root2Leaf);
    return root1Leaf == root2Leaf;
  }
};