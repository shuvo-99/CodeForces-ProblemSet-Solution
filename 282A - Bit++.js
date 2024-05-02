function bit(inp) {
  var value = 0;
  for (i = 0; i < inp; i++) {
    var op = readline();
    if (op.includes("++") || op === "++x" || op === "x++") {
      value += 1;
    } else if (op.includes("--") || op === "--x" || op === "x--") {
      value -= 1;
    }
  }

  print(value);
}

bit(parseInt(readline()));

// Alternative -> Efficient Solution

function bit(inp) {
  var value = 0;
  for (i = 0; i < inp; i++) {
    var op = readline();
    if (op.includes("++")) {
      value += 1;
    } else if (op.includes("--")) {
      value -= 1;
    }
  }

  print(value);
}

bit(parseInt(readline()));
