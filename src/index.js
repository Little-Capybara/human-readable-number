module.exports = function toReadable (number) {
  const oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const toTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const twoDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const a = Math.trunc(number/100);//109/100=1
  const b = number%100;//126%100=9
  const c =  Math.trunc(b/10);//26/10=0
  const d = b%10;//26%10=9

  if (a==0) {
    if (c==0) {
        return oneDigit[d];
      } else if (c==1) {
        return toTwenty[d];
      } else {
        if (d==0){
          return twoDigit[c];
        } else {
          return (twoDigit[c]+' '+oneDigit[d]);
        }
      }
    } else {
      if (b==0) {
        return (oneDigit[a]+' hundred');
      } else {
        if (c==0) {
          return (oneDigit[a]+' hundred '+oneDigit[d]);
        } else if (c==1) {
          return (oneDigit[a]+' hundred '+toTwenty[d]);
        } else {
          if (d==0){
            return (oneDigit[a]+' hundred '+twoDigit[c]);
          } else {
            return (oneDigit[a]+' hundred '+twoDigit[c]+' '+oneDigit[d]);
          }
        }
      }
    }

  }

