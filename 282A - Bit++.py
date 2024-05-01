def bit(inp):
  value = 0
  for i in range(inp):
    op = input()
    if '++' in op or op == 'x++' or op == '++x':
        value += 1
    elif '--' in op or op == 'x--' or op == '--x':
        value -= 1
  print(value)
bit(int(input()))

# Alternative -> Better Solution

def bit(inp):
    value = 0
    for i in range(inp):
        op = input()
        if '++' in op:
            value += 1
        elif '--' in op:
            value -= 1
    print(value)

bit(int(input()))
