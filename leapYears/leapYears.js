const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    /*
    if(year % 4 === 0){
        if(year % 100 === 0 && year % 400 !== 0){
            return false;
        }else{
            return true;
        }
        return true;
    }else{
        return false;
    }
    */
    
   

};

module.exports = leapYears;
