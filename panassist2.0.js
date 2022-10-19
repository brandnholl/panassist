//  panassist2.0.py converted into JS by brandnholl

//  At the moment, the three main functions: raw_probability, weighted_probability, and coin_spread print lists. 
//  Raw and Weighted go from highest to lowest probability. Coin spread goes from lowest to highest default payout (not in any optimized order)
//  When you add them to a table UI, I would find a way to combine coin spread list with weighted list (put in same table)

const red_pay = 2
const purple_pay = 3
const green_pay = 4
const yellow_pay = 5
const white_pay = 6
const orange_pay = 10
const gold_pay = 15

//  Following functions calculate probability of color winning next round

Math.factorial = function(n) {
    if (n === 0) {
        return 1;
    }
    return n * Math.factorial(n - 1);
}

function red(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.236**(wins + 1)) * (0.764 ** ((rounds + 1) - (wins + 1)))))
}

function black(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.287**(wins + 1)) * (0.713 ** ((rounds + 1) - (wins + 1)))))
}

function green(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.125**(wins + 1)) * (0.875 ** ((rounds + 1) - (wins + 1)))))
}

function yellow(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.111**(wins + 1)) * (0.889 ** ((rounds + 1) - (wins + 1)))))
}

function purple(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.088**(wins + 1)) * (0.912 ** ((rounds + 1) - (wins + 1)))))
}

function white(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.079**(wins + 1)) * (0.921 ** ((rounds + 1) - (wins + 1)))))
}

function orange(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.046**(wins + 1)) * (0.954 ** ((rounds + 1) - (wins + 1)))))
}

function gold(rounds, wins){
    return ((math.factorial((rounds + 1))/(math.factorial((wins + 1)) * math.factorial((rounds + 1) - (wins + 1)))) * ((0.028**(wins + 1)) * (0.972 ** ((rounds + 1) - (wins + 1)))))
}

function raw_probability(red_wins, black_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins){
    //  Calculates raw probablity next round

    let rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins

    let raw_black = black(rounds, black_wins)
    let raw_red = red(rounds, red_wins)
    let raw_purple = purple(rounds, purple_wins)
    let raw_green = green(rounds, green_wins)
    let raw_yellow = yellow(rounds, yellow_wins)
    let raw_white = white(rounds, white_wins)
    let raw_orange = orange(rounds, orange_wins)
    let raw_gold = gold(rounds, gold_wins)

    let raw = [raw_black, raw_red, raw_purple, raw_green, raw_yellow, raw_white, raw_orange, raw_gold]
    raw.sort(reverse = true)
    console.log(raw)
}

function weighted_probability(red_wins, back_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins){
    //  Calculates weighted probability next round

    let rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins

    let weighted_black = black(rounds, black_wins) * black_pay
    let weighted_red = red(rounds, red_wins) * red_pay
    let weighted_purple = purple(rounds, purple_wins) * purple_pay
    let weighted_green = green(rounds, green_wins) * green_pay
    let weighted_yellow = yellow(rounds, yellow_wins) * yellow_pay
    let weighted_white = white(rounds, white_wins) * white_pay
    let weighted_orange = orange(rounds, orange_wins) * orange_pay
    let weighted_gold = gold(rounds, gold_wins) * gold_pay

    let weighted = [weighted_black, weighted_red, weighted_purple, weighted_green, weighted_yellow, weighted_white, weighted_orange, weighted_gold]
    weighted.sort(reverse = true)
    console.log(weighted)
}

function coin_spread(red_wins, black_wins, purple_wins, green_wins, yellow_wins, white_wins, orange_wins, gold_wins){
    //   Calculates optimal quarters to put on certain color

    let rounds = red_wins + black_wins + purple_wins + green_wins + yellow_wins + white_wins + orange_wins + gold_wins

    spread_red = raw_red/0.236
    if (spread_red < 1){
        let opt_spread_red = "0 quarters"}
    if (spread_red == 1){
        let opt_spread_red = "0-2 quarters"}
    else{
        let opt_spread_red = "3-4 quarters"}

    spread_purple = raw_purple/0.088
    if (spread_purple < 1){
        let opt_spread_purple = "0 quarters"}
    if (spread_purple == 1){
        let opt_spread_purple = "0-2 quarters"}
    else{
        let opt_spread_purple = "3-4 quarters"}
    
    spread_green = raw_green/0.125
    if (spread_green < 1){
        let opt_spread_green = "0 quarters"}
    if (spread_green == 1){
        let opt_spread_green = "0-2 quarters"}
    else{
        let opt_spread_green = "3-4 quarters"}

    spread_yellow = raw_yellow/0.111
    if (spread_yellow < 1){
        let opt_spread_yellow = "0 quarters"}
    if (spread_yellow == 1){
        let opt_spread_yellow = "0-2 quarters"}
    else{
        let opt_spread_yellow = "3-4 quarters"}

    spread_white = raw_white/0.079
    if (spread_white < 1){
        let opt_spread_white = "0 quarters"}
    if (spread_white == 1){
        let opt_spread_white = "0-2 quarters"}
    else{
        let opt_spread_white = "3-4 quarters"}
    spread_orange = raw_orange/0.046
    if (spread_orange < 1){
        let opt_spread_orange = "0 quarters"}
    if (spread_orange == 1){
        let opt_spread_orange = "0-2 quarters"}
    else{
        let opt_spread_orange = "3-4 quarters"}

    spread_gold = raw_gold/0.028
    if (spread_gold < 1){
        let opt_spread_gold = "0 quarters"}
    if (spread_gold == 1){
        let opt_spread_gold = "0-2 quarters"}
    else{
        let opt_spread_gold = "3-4 quarters"}
}

let opt_spread = [opt_spread_red, opt_spread_purple, opt_spread_green, opt_spread_yellow, opt_spread_white, opt_spread_orange, opt_spread_gold]
console.log(opt_spread)