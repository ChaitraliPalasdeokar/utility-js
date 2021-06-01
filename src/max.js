const maxelement = (arr) => {
    if(arr.length == 0){
     return undefined;
    } 
    
    return Math.max(...arr)
}


module.exports = maxelement;
