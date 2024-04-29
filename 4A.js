const evenDivide = (inp) => {
  if (inp % 2 !== 0) {
    return "NO";
  }
  for (let i = 2; i <= inp / 2; i += 2) {
    if (i + i === inp) {
      return "YES";
    }
  }

  for (let i = 2; i <= inp / 2; i += 2) {
    for (let j = i + 2; j <= inp / 2; j += 2) {
      if (i + j === inp) {
        return "YES";
      }
    }
  }

  return "NO";
};

console.log(evenDivide(7));
