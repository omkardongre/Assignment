function ChkString(sentance, word) {
    var i = 0, j = 0;
    while (i < sentance.length) {
        while (j < word.length && i < sentance.length && sentance[i] == word[j]) {
            i++;
            j++;
        }
        if (j == word.length) {
            return true;
        }
        else {
            j = 0;
            i++;
        }
    }
    return false;
}
var sentance = "I am student of marvellous marvellmarvellous infosystem pune. It is marvollous";
var word = "marvellous";
console.log(ChkString(sentance, word));
