function sumAll(start, end) {

if (typeof(start) != "number" || typeof(end) != "number") { return "ERROR"; } else
if (start < 0 || end < 0) { return "ERROR"; }

    if (start < end) {
        let diff = end-start;
        sum = start;
        let i = 1;
        while (i <= diff) {
            sum+=start+i;
            i++;
        }
        return sum;
    } else if (start > end) {
        let diff = start-end;
        sum = end;
        let i = 1;
        while (i <= diff) {
            sum+=end+i;
            i++;
        }
        return sum;
    }
}

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
