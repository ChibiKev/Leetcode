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
  bool dfs(TreeNode* current, TreeNode* subCurrent){
    if (current == nullptr){
      return false;
    }
    else if (isIdenticalDFS(current, subCurrent)){
      return true;
    }

    return dfs(current->left, subCurrent) || dfs(current->right, subCurrent);
  }
  
  bool isIdenticalDFS(TreeNode* current, TreeNode* subCurrent){
    if (current == nullptr || subCurrent == nullptr){
      return current == nullptr && subCurrent == nullptr;
    }
    return current->val == subCurrent->val && isIdenticalDFS(current->left, subCurrent->left) && isIdenticalDFS(current->right, subCurrent->right);
  }
public:
  bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    return dfs(root, subRoot);
  }
};