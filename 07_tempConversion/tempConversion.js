function ftoc(f) {
    let convert = (f-32)/1.8;
    let round = 0;
    if (convert%1 == 0) { round = Number(convert.toFixed(0)) } else 
    { round = Number(convert.toFixed(1)); }
    return round;
}

function ctof(c) {
  let convert = (c*1.8)+32;
  let round = 0;
  if (convert%1 == 0) { round = Number(convert.toFixed(0)) } else
  { round = Number(convert.toFixed(1)); }
  return round;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
