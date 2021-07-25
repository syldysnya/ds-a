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