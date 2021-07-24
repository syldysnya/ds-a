'Binary Tree Pruning'

var pruneTree = function(root) {
    if (!root) return null;
    if (root.val === 0 && !root.left && !root.right) return null;
    
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    
    return (root.val === 0 && !root.left && !root.right) ? null : root
};