def wayTooLongWords(inp):
    for i in range(inp):
        word = input()
        if len(word) >10:
            print(word[0]+str(len(word) - 2)+word[-1])
        else:
            print(word)

wayTooLongWords(int(input()))