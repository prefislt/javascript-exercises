function repeatString(string, num) {
    if (num < 0) { return "ERROR"; } else
    if (num == 0) { return ""; }

    let i = 0;
    let stringArray = [];
    while (num > i) {
        stringArray[i] = string;
        i++;
    }
    return stringArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
