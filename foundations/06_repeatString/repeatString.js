const repeatString = function(baseString, repeatCount) {
    let string = '';

    if(repeatCount < 0)
        return 'ERROR';
    
    for(let i = 0; i < repeatCount; ++i)
    {
        string += baseString;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
