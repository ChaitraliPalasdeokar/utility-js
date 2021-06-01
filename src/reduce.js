const tail = require('./tail')
const head = require('./head')
const reduce = (arr, functionName, val) =>  {
    
    if(arr.length==0){
          return undefined;
    }
    
    return functionName(arr[0],arr[1]);
   
 }

module.exports = reduce;
