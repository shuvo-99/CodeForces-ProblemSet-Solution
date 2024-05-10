m, n = input().split(' ')

def dominoPiling(m,n):
  totalArea = m * n
  dominoPiece = totalArea//2
  print(dominoPiece) 

dominoPiling(int(m),int(n))
