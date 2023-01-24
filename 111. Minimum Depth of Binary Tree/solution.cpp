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
  int dfs(TreeNode* current, int depth){
    if (current == nullptr){
      return depth - 1;
    }
    else if (current->left == nullptr && current->right == nullptr){
      return depth;
    }
    else if (current->left != nullptr && current->right == nullptr){
      return dfs(current->left, depth + 1);
    }
    else if (current->left == nullptr && current->right != nullptr){
      return dfs(current->right, depth + 1);
    }

    int leftDepth = dfs(current->left, depth + 1);
    int rightDepth = dfs(current->right, depth + 1);
    if (leftDepth < rightDepth){
      return leftDepth;
    }
    return rightDepth;
  }
public:
  int minDepth(TreeNode* root) {
    return dfs(root, 1);
  }
};