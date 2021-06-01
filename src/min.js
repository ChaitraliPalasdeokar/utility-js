const minelement = (arr) => {
    if(arr.length == 0){
     return undefined;
    } 
    
    return Math.min(...arr)
}


module.exports = minelement;
