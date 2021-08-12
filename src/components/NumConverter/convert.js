const one_words = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};
const ten_words = {
    0: "",
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};

const teen_words = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fiveteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};

// #-------- NUMBERS 1-9 ---------#
export const ones = (num_1) => one_words[num_1];
// #-------- NUMBERS 10-99 ---------#
export const tens = (num_1, num_2) => {
    if (
        Number(String(num_1) + String(num_2)) >= 10 &&
        Number(String(num_1) + String(num_2)) < 20
    ) {
        return teen_words[Number(String(num_1) + String(num_2))];
    }

    return ten_words[num_1] + (num_1 != 0 ? " " : "") + one_words[num_2];
};

// #-------- NUMBERS 100-999 ---------#
export const hundreds = (num_1, num_2, num_3) => {
    let first = ones(num_1);
    let second = tens(num_2, num_3);

    if (first == 0) {
        return first + second;
    } else {
        let r = first + " hundred " + second;
        return r;
    }
};

// #--------- NUMBERS 1000-9999 ----------#
export const thousands = (num_1, num_2, num_3, num_4) => {
    let r =
        ones(num_1) +
        (num_1 !== 0 ? " thousand " : "") +
        hundreds(num_2, num_3, num_4);
    return r;
};
