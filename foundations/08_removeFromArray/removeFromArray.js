const removeFromArray = function(array, ...removedItems) {
    
    for(let removedItem of removedItems)
    {
        array = (array.filter(item => item !== removedItem));
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
