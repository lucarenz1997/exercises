const repeatString = function(word, number) {
    if(number < 0){
        return "ERROR";
    }
    if(word === ""){
        return "";
    }
    let str="";
    for(let i = 0; i< number; i++){
        str = str.concat(word);
    }
    return str;

};


module.exports = repeatString;
