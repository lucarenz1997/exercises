const sumAll = function(start, end) {
      let total = 0;
    let smallNumber = start, largeNumber = end;
    console.log("3 ==== TRUE OR FALSE: "  + isNaN(3));
    console.log("TRUE OR FALSE: "  + isNaN([3,4]));

    if(start < 0 || end < 0 || isNaN(start) || isNaN(end)
     || typeof end ==="string" || typeof start === "string"){
        return "ERROR";
    }else if(start > end){
        smallNumber = end;
        largeNumber = start;
    }else {
        smallNumber = start;
        largeNumber = end;
    }

    console.log("Small: " + smallNumber + " and large: " + largeNumber);
    for(let i = smallNumber; i <= largeNumber; i++){
        total += + i;
    }
    return total;
};

module.exports = sumAll;
