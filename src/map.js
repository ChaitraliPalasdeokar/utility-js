const map=(arr,functionName)=>{
     const resultArray = [];
     for(i=0;i<arr.length;i++){
          resultArray.push(functionName(arr[i]));
     }
     return resultArray;
}

module.exports=map;
