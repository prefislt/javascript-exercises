function reverseString(string) {
    let stringLength = string.length;
    let lettersArray = [];
    let i = 0;

    while (i <= stringLength) {
        lettersArray[i] = string.charAt(stringLength - (i+1));
        i++;
    }

    return lettersArray.join("");

}

// Do not edit below this line
module.exports = reverseString;
