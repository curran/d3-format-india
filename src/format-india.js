export default function (x) {
  var negative = x < 0,
      str = String(negative ? -x : x),
      arr = [],
      i = str.indexOf("."),
      j;

  if(i === -1){
    i = str.length;
  } else {
    for(j = str.length - 1; j > i; j--){
      arr.push(str[j]);
    }
    arr.push(".");
  }
  i--;

  for(j = 0; i >= 0; i--, j++){
    if(j > 2 && (j % 2 === 1)){
      arr.push(",");
    }
    arr.push(str[i]);
  }

  if(negative){
    arr.push("-");
  }

  return arr.reverse().join("");
};
