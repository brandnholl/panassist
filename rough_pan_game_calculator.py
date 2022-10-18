#   At the moment, the three main functions: raw_probability, weighted_probability, and coin_spread print lists. 
#   Raw and Weighted go from highest to lowest probability. Coin spread goes from lowest to highest default payout (not in any optimized order)
#   When you add them to a table UI, I would find a way to combine coin spread list with weighted list (put in same table)
#   Code also needs A LOT of debugging; very rough code

def fac(n):
    if n == 1:
        return 1
    else:
        return n * fac(n-1)

red_pay = 2
purple_pay = 3
green_pay = 4
yellow_pay = 5
white_pay = 6
orange_pay = 10
gold_pay = 15

#   Following functions calculate probability of color winning next round

def red(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.236**(wins + 1)) * (0.764 ** ((rounds + 1) - (wins + 1)))))

def black(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.287**(wins + 1)) * (0.713 ** ((rounds + 1) - (wins + 1)))))

def green(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.125**(wins + 1)) * (0.875 ** ((rounds + 1) - (wins + 1)))))

def yellow(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.111**(wins + 1)) * (0.889 ** ((rounds + 1) - (wins + 1)))))

def purple(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.088**(wins + 1)) * (0.912 ** ((rounds + 1) - (wins + 1)))))

def white(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.079**(wins + 1)) * (0.921 ** ((rounds + 1) - (wins + 1)))))

def orange(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.046**(wins + 1)) * (0.954 ** ((rounds + 1) - (wins + 1)))))

def gold(rounds, wins):
    return ((fac((rounds + 1))/(fac((wins + 1)) * fac((rounds + 1) - (wins + 1)))) * ((0.028**(wins + 1)) * (0.972 ** ((rounds + 1) - (wins + 1)))))



def raw_probability(red_wins, black_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins):
    
    #   Calculates raw probabilty next round

    rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins
    
    raw_black = black(black_wins, rounds)
    raw_red = red(red_wins, rounds)
    raw_purple = purple(purple_wins, rounds)
    raw_green = green(green_wins, rounds)
    raw_yellow = yellow(yellow_wins, rounds)
    raw_white = white(white_wins, rounds)
    raw_orange = orange(orange_wins, rounds)
    raw_gold = gold(gold_wins, rounds)

    raw = [raw_black, raw_red, raw_purple, raw_green, raw_yellow, raw_white, raw_orange, raw_gold]
    raw.sort(reverse = True)
    print(raw)

def weighted_probability(red_wins, black_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins):
    
    #   Calculates weighted probability (optimal betting based on pay out)
    #   Might need some changes in how it calculates the weights

    rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins
    
    raw_red = red(red_wins, rounds)
    raw_purple = purple(purple_wins, rounds)
    raw_green = green(green_wins, rounds)
    raw_yellow = yellow(yellow_wins, rounds)
    raw_white = white(white_wins, rounds)
    raw_orange = orange(orange_wins, rounds)
    raw_gold = gold(gold_wins, rounds)

    weighted_red = red_pay * raw_red
    weighted_purple = purple_pay * raw_purple
    weighted_green = green_pay * raw_green
    weighted_yellow = yellow_pay * raw_yellow
    weighted_white = white_pay * raw_white
    weighted_orange = orange_pay * raw_orange
    weighted_gold = gold_pay * raw_gold

    weighted = [weighted_red, weighted_purple, weighted_green, weighted_yellow, weighted_white, weighted_orange, weighted_gold]
    weighted.sort(reverse = True)
    print(weighted)

def coin_spread(red_wins, black_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins):

    #   Calculates optimal quarters to put on certain color

    rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins
    
    raw_red = red(red_wins, rounds)
    raw_purple = purple(purple_wins, rounds)
    raw_green = green(green_wins, rounds)
    raw_yellow = yellow(yellow_wins, rounds)
    raw_white = white(white_wins, rounds)
    raw_orange = orange(orange_wins, rounds)
    raw_gold = gold(gold_wins, rounds)

    #   There's probability a much more efficient way to code this part, I would recommend fixing if possible

    spread_red = raw_red/0.236
    if spread_red < 1:
        opt_spread_red = "0 quarters"
    if spread_red == 1:
        opt_spread_red = "0-2 quarters"
    else:
        opt_spread_red = "3-4 quarters"
    spread_purple = raw_purple/0.088
    if spread_purple < 1:
        opt_spread_purple = "0 quarters"
    if spread_purple == 1:
        opt_spread_purple = "0-2 quarters"
    else:
        opt_spread_purple = "3-4 quarters"
    spread_green = raw_green/0.125
    if spread_green < 1:
        opt_spread_green = "0 quarters"
    if spread_green == 1:
        opt_spread_green = "0-2 quarters"
    else:
        opt_spread_green = "3-4 quarters"
    spread_yellow = raw_yellow/0.111
    if spread_yellow < 1:
        opt_spread_yellow = "0 quarters"
    if spread_yellow == 1:
        opt_spread_yellow = "0-2 quarters"
    else:
        opt_spread_yellow = "3-4 quarters"
    spread_white = raw_white/0.079
    if spread_white < 1:
        opt_spread_white = "0 quarters"
    if spread_white == 1:
        opt_spread_white = "0-2 quarters"
    else:
        opt_spread_white = "3-4 quarters"
    spread_orange = raw_orange/0.046
    if spread_orange < 1:
        opt_spread_orange = "0 quarters"
    if spread_orange == 1:
        opt_spread_orange = "0-2 quarters"
    else:
        opt_spread_orange = "3-4 quarters"
    spread_gold = raw_gold/0.028
    if spread_gold < 1:
        opt_spread_gold = "0 quarters"
    if spread_gold == 1:
        opt_spread_gold = "0-2 quarters"
    else:
        opt_spread_gold = "3-4 quarters"

    opt_spread = [opt_spread_red, opt_spread_purple, opt_spread_green, opt_spread_yellow, opt_spread_white, opt_spread_orange, opt_spread_gold]
    print(opt_spread) 