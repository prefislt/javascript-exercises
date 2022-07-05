function removeFromArray(array, ...remove) {

    // Count how many remove args there is
    let howMany = 0;
    while(remove[howMany] != undefined) {
        howMany++;
    }

    if (howMany == 1) {
        let where = array.indexOf(remove[0]);
        if (where == -1) { return array; } else {
            array.splice(where, 1);
            return array;
        }
    } else if (howMany > 1) {
        let i = 0;
        while (i < howMany) {
            let where = array.indexOf(remove[i]);
            if (where >= 0) { array.splice(where, 1); }
            i++;
        }
        return array;
    }
}

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
