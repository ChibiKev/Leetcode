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
  vector<double> bfs(TreeNode* start){
    vector<TreeNode*> myQueue {start};
    vector<double> result;
    while (myQueue.size() != 0){
      double total = 0;
      double count = 0;
      vector<TreeNode*> newQueue;
      for (int index = 0; index < myQueue.size(); index++){
        TreeNode* current = myQueue[index];
        if (current != NULL){
          total += current->val;
          count += 1;
        }
        if (current->left != NULL){
          newQueue.push_back(current->left);
        }
        if (current->right != NULL){
          newQueue.push_back(current->right);
        }
      }
      double average = total / count;
      result.push_back(average);
      myQueue = newQueue;
    }
    return result;
  }
public:
  vector<double> averageOfLevels(TreeNode* root) {
    return bfs(root);
  }
};