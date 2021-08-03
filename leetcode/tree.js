'Binary Tree Pruning'

var pruneTree = function(root) {
    if (!root) return null;
    if (root.val === 0 && !root.left && !root.right) return null;
    
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    
    return (root.val === 0 && !root.left && !root.right) ? null : root
};

'98. Validate Binary Search Tree'

var isValidBST = function(root, min = null, max = null) {
    if (!root) return true;
    
    if (min && root.val >= min.val) return false;
    if (max && root.val <= max.val) return false;
    
    let left = isValidBST(root.left, root, max);
    let right = isValidBST(root.right, min, root);
    
    return left && right
};

```
   20
  /  \
 9    25
/ \   
5   12 
  /  \
 11   14 C
     /  \
   13 C	 16  node.right = null node.left = null
        /  \
    12.5 C  13.5
 ```

 function Node(key) {
 this.key = key;    // 12
 this.parent = null;// 9
 this.left = null;  // 11
 this.right = null; // 14
}


'12 -> 12.5'
'9  -> 11'
'16 -> 20'
'25 -> null'

'12 -> check right -> check left -> check left -> check left'

function nextLargestEle(node) { // node = 16
 if (!node.parent && !node.left && !node.right) return null; // O(1)
 
   if (node.right === null) {
     return recursionParent(node.parent, node.key) // n = node height
 }
 
 return recursionChild(node.right); // n = node height -> space O(1)
}

function recursionParent(node, target) { // node = 20, target = 16
   if (node.parent && node.parent.key > target) return node.parent.key;
 if (node.parent === null) return null;
 
 return recursion(node.parent, target);
}

function recursionChild(node) { // node = 12.5
   if (node.left === null) return node.key; // 12.5
 
 return recursion(node.left); // node = 13
}