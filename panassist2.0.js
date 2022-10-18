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