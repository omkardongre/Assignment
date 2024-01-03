function ChkString(sentance:string, word:string):boolean {
    let i:number=0, j:number=0;
    while(i<sentance.length) {
        while(j<word.length && i<sentance.length && sentance[i]==word[j]) {
            i++;
            j++;
        }
        if(j==word.length) {
            return true;
        } else {
            j=0;
            i++;
        }

    }
    
    return false;
}

let sentance:string = "I am student of marvellous marvellmarvellous infosystem pune. It is marvollous"
let word:string = "marvellous";
console.log(ChkString(sentance, word));




/*
output :
true
*/
