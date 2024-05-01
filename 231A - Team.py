def aTeam(inp):
  count = 0
  for i in range(inp):
    prob = input().split(' ')
    for j in range(len(prob)):
      prob[j] = int(prob[j])
    if sum(prob) >= 2:
      count+=1
  print(count)
aTeam(int(input()))

# Alternative -> Better Solution

def aTeam(inp):
    count = 0
    for _ in range(inp):
        prob = list(map(int, input().split()))
        if sum(prob) >= 2:
            count += 1
    print(count)

aTeam(int(input()))
