var x = readline();

if (x < 4) {
  print("NO");
} else {
  print(x % 2 === 0 ? "YES" : "NO");
}

// Alternative

const evenDivide = (inp) => {
  if (inp % 2 !== 0) {
    return "NO";
  }
  for (let i = 2; i <= inp / 2; i += 2) {
    if ((inp - i) % 2 === 0) {
      return "YES";
    }
  }
  return "NO";
};

console.log(evenDivide(4));
