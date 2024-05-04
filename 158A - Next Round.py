participants, place = input().split(' ')

def nextRound(place):
    count = 0
    inp = input().split(' ')
    for i in inp:
        if( int(i)>0) and (int(i) >= int(inp[place - 1])):
            count+= 1 
    print(count)
nextRound(int(place))

