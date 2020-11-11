
/*function romanToArabicConverter(romanNumeral) {
      if (romanNumeral == "I") {
            return 1;
      }
      else {
            return 2;
      }
}*/

function romanToArabicConverter(romanNumeral) {
      var romanNumeral = romanNumeral.toUpperCase(),
          lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
          arabic = 0,
          i = romanNumeral.length;
      while (i--) {
        if ( lookup[romanNumeral[i]] < lookup[romanNumeral[i+1]] )
          arabic -= lookup[romanNumeral[i]];
        else
          arabic += lookup[romanNumeral[i]];
      }
      return arabic;
    }
     

module.exports = romanToArabicConverter;