function aTeam(inp) {
  var count = 0;
  for (i = 0; i < inp; i++) {
    var prob = readline().split(" ");

    var sum = prob.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue);
    }, 0);
    if (sum >= 2) {
      count += 1;
    }
  }

  print(count);
}

aTeam(parseInt(readline()));
