"use strict";
let node = {
    value: "Lisa",
    next: {
      value: "Gerard",
      next: {
        value: "Eric",
        next: {
          value: "Manzi",
          next: null
        }
      }
    }
  };
  
  function contains(target) {
  
    if(node.value===target){
        return true;
    }else{
        return false;
    }
  }
  


  
 console.log( contains("Manzi"));
consolecontains(tree, “Crusty”) → false