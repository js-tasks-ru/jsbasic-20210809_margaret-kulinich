function getMinMax(str) {
  let strArr = str.split(' ')
    .filter(strNumber => !isNaN( Number(strNumber) ));

  return {
    min: Math.min(...strArr),
    max: Math.max(...strArr)
  };
}
