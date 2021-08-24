function camelize(str) {
  let strArr = str.split('-');

  let strRestCapitalized = strArr.slice(1)
    .map(strItem => strItem[0].toUpperCase() + strItem.slice(1))
    .join('');

  return strArr[0] + strRestCapitalized;
}


