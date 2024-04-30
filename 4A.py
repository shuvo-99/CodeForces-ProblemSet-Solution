def evenDivide(inp):

    if inp%2 != 0:
        return 'No'
    for i in range(2, inp, 2):
        if i*2 == inp:
            return 'Yes'
        for j in range(i+2, inp, 2):
            if i + j == inp:
                return 'Yes'
    return 'No'
print(evenDivide(int(input())))

# Alternative  -> Better Soultion

def evenDivide(inp):
    if inp < 4 or inp % 2 != 0:
        return "NO"
    else:
        for i in range(2, inp, 2):
            if (inp - i) % 2 == 0:
                return "YES"
    return "NO"

print(evenDivide(int(input())))