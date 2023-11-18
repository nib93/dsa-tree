/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    if (!this.root)
      return 0;

    let totalSum = this.root.val;

    function helper(node) {
      //traverse all the children
      for (let curNode of node.children) {
        // add all the valuues
        totalSum +=  curNode.val;
        // go recursively if it has any child
        if ( curNode.children.length > 0) {
          
          helper( curNode);
        }
      }
    }

    helper(this.root);
    return totalSum;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function helpers(node) {
      //traverse all the children
      for (let curNode of node.children) {
        // count the curnode value if it's even
        if (curNode.val % 2 === 0) count++;
       // go recursively if it has any child
        if (curNode.children.length > 0) {
        
          helpers(curNode);
        }
      }
    }

    helpers(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function helper(node) {
       //traverse all the children
      for (let curNode of node.children) {
        // count the node the value is greater than lowerBound
        if (curNode.val > lowerBound) count++;
       // go recursively if it has any child
        if (curNode.children.length > 0) {
    
          helper(curNode);
        }
      }
    }

    helper(this.root);
    return count; 
  }

  
}

module.exports = { Tree, TreeNode };
