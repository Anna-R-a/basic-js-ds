const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;

  }
  root() {
    
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode (this.rootNode, data);
    
    function addNode(node, data){
      const newNode = new Node(data);
      if (!node) {
        return newNode;
      }
      if(node.data === data){
        return node;
      }
      if (node.data < data){
        node.right = addNode(node.right, data)
      } else {
        node.left = addNode(node.left, data)
      }
      return node;
    }
  }

  has(data) {
    if(!this.rootNode){
      return false;
    }
    let curr = this.rootNode;
    while(true) { 
      if (!curr) return false;
      if(data === curr.data){
        return true;
      } 
      if (data > curr.data){
        curr = curr.right;
        } else {
          curr = curr.left;
        }
      }
    }

    find(data) {
      if(!this.rootNode){
        return null;
      }
      let curr = this.rootNode;
      while(true) { 
        if (!curr) return null;
        if(data === curr.data){
        return curr;
        } 
        if ( data > curr.data ){
          curr = curr.right;
          } else {
            curr = curr.left;
          }
        }
      }
  

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data){
      if(!node){
        return null;
      }
      if (node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data){
        node.left = removeNode(node.left, data);
      return node;
      } else {
        if (!node.left && !node.right){
          node = null;
          return node; 
        }
        if (!node.left){
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }
        let minNodeRight = node.right;
          while(minNodeRight.left){
            minNodeRight = minNodeRight.left
          }
          node.data = minNodeRight.data;
          node.right = removeNode(node.right, minNodeRight.data);
          return node;
        }
    }
  }

  min() {
    if(!this.rootNode){
      return null;
    }
    let node = this.rootNode;
    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootNode){
      return null;
    }
    let node = this.rootNode;
    while (node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};