/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //if the root is null then min depth is 0
    if (!this.root) return 0;


    function helper(node) {
      //if root has no child then height would be 1
      if (node.left === null && node.right === null)
        return 1;
      //if there is no left child then go to right side of child
      if (node.left === null)
        return helper(node.right) + 1;
      //if there is no right child then go to rleft side of child
      if (node.right === null)
        return helper(node.left) + 1;
      //return the min depth from left and right side of tree
      return (Math.min(minDepthHelper(node.left), helper(node.right)) + 1);
    }
    return helper(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    //if the root is null then max depth is 0
    if (!this.root) 
      return 0;

    function helper(node) {
      //if root has no child then height would be 1
      if (node.left === null && node.right === null) 
        return 1;
      //if there is no left child then go to right side of child
      if (node.left === null)
        return helper(node.right) + 1;
      //if there is no right child then go to rleft side of child
      if (node.right === null)
        return helper(node.left) + 1;
      //return the max depth from left and right side of tree
      return (Math.max(helper(node.left), helper(node.right)) + 1);
    }

    return helper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    //initially maxSum=0
    let maxSum = 0;

    function helper(node) {
      //if the node is nuull return 0
      if (node === null)
        return 0;
      //calculate sum of left children of the tree
      const leftSum = helper(node.left);
      //calculate sum of right children of the tree
      const rightSum = helper(node.right);
      //find the max sum
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    helper(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // add all the nodes in queue
    let queue = [this.root];
    let nearest = null;

    while (queue.length) {
      //pop the value from the queue
      let curNode = queue.shift();
      //stores the cur node value
      let curVal = curNode.val;
      //if higher than the lowerbound
      let higher = curVal > lowerBound;
      //if current val is < than nearest value then assign nearest else make it null
      let reassign = curVal < nearest || nearest === null;

      if (higher && reassign) {
        nearest = curVal;
      }

      //push left child into the queue
      if (curNode.left) 
        queue.push(curNode.left);

      //push right child into the queue
      if (curNode.right) 
        queue.push(curNode.right);
    }

    return nearest;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function findData(nodeToFind,curNode,level = 0,data = { level: 0, parent: null }) {
      if (data.parent) return data;
      if (curNode.left === nodeToFind || curNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = curNode;
      }
      if (curNode.left) {
        findData(nodeToFind, curNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findData(nodeToFind, curNode.right, level + 1, data);
      }
      return data;
    }

    let node1Data = findData(node1, this.root);
    let node2Data = findData(node2, this.root);

    let sameLevel =node1Data && node2Data && node1Data.level === node2Data.level;
    let differentParents =node1Data && node2Info && node1Data.parent !== node2Data.parent;
    return sameLevel && differentParents;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {


    const values = [];

    function preorder(node) {

      if (node) {

        values.push(node.val);
        preorder(node.left);
        preorder(node.right);
      } 
      else {
        values.push("#");
      }
    }

    preorder(tree.root);
    return values.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {
    if (!stringTree) return null;

    const values = stringTree.split(" ");

    function CreateTree() {
     
      if (values.length) {
        const curVal = values.shift();
        if (curVal === "#")
          return null;
        let curNode = new BinaryTreeNode(+curVal);
        curNode.left = CreateTree();
        curNode.right = CreateTree();

        return curNode;
      }
    }

    const root = CreateTree();
    return new BinaryTree(root); 

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

    if (curNode === null) 
      return null;
    if (curNode === node1 || curNode === node2)
      return currentNode;

    const left = this.lowestCommonAncestor(node1, node2, curNode.left);
    const right = this.lowestCommonAncestor(node1, node2, curNode.right);

    
    if (left !== null && right !== null)
      return curNode;
    
    if (left !== null || right !== null) 
      return left || right;
    
    
    if (left === null && right === null)
      return null;
  
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
