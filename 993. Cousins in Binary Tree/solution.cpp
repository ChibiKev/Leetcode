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
  int xDepth = -1;
  int yDepth = -1;
  TreeNode* xParent = NULL;
  TreeNode* yParent = NULL;
  
  void dfs(TreeNode* current, TreeNode* parent, int x, int y, int depth){
    if (current == NULL){
      return;
    }
    if (current->val == x){
      xDepth = depth;
      xParent = parent;
    }
    else if (current->val == y){
      yDepth = depth;
      yParent = parent;
    }
    dfs(current->left, current, x, y, depth + 1);
    dfs(current->right, current, x, y, depth + 1);
  }
public:
  bool isCousins(TreeNode* root, int x, int y) {
    dfs(root, NULL, x, y, 0);
    return xDepth == yDepth && xParent != yParent;
  }
};