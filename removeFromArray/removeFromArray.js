    
    
const removeFromArray = function(... args) {
    const array = args[0];
    const newArray = [];

    array.forEach((item) =>{ // array = [1,2,3,4] item = 1, item = 2,.....
        if(!args.includes(item)){ // args = [1,2,3,4], 1,2
            newArray.push(item);
        }
    });
    return newArray;

};


/*

const removeFromArray = function(array, ... args){
    const newArray = [];

    array.forEach(element => {
        if(!args.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;

}
*/

module.exports = removeFromArray;
