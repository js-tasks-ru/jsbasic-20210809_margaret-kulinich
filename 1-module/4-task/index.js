function checkSpam(str) {
  const strLowercased = str.toLowerCase();
  
  if (strLowercased.includes('1xbet') || strLowercased.includes('xxx')) {
    return true;
  }

  return false;
}

