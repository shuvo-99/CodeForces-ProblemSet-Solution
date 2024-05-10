const inp = readline().split(" ");
const m = inp[0];
const n = inp[1];
function dominoPiling(m, n) {
  var totalArea = m * n;
  var dominoPiece = Math.floor(totalArea / 2);
  print(dominoPiece);
}
dominoPiling(parseInt(m), parseInt(n));
