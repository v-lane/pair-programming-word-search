const wordSearch = (letters, word) => {

  if (!word || typeof word !== "string") {
    return false;
  }

  if (!Array.isArray(letters)) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  const verticalJoin = [];

  for (let word of horizontalJoin) {
    let x = 0;
    while (x < horizontalJoin.length - 1) {
      if (verticalJoin[x] === undefined) {
        verticalJoin[x] = word[x];
      } else {
        verticalJoin[x] += word[x];
      }
      x++;
    }
  }

  for (let l of horizontalJoin) {
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) {
      return true;
    }
  }

  for (let l of verticalJoin) {
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;