var inpArr = readline().split(" ");
function nextRound(place) {
  var count = 0;
  var inp = readline().split(" ");
  for (i = 0; i < inp.length; i++) {
    if (parseInt(inp[i]) > 0 && parseInt(inp[i]) >= parseInt(inp[place - 1])) {
      count += 1;
    }
  }
  print(count);
}

nextRound(parseInt(inpArr[1]));
