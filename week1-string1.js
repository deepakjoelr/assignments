let sentence = "Hello World"
function lengthOfLastWord(sentence) {
    let trim = sentence.trim();
    let split = trim.split(" ");
    let lastWord = split[split.length - 1];
    console.log("Count of last word is", lastWord.length);
}

lengthOfLastWord(sentence);


let sentence2 = "   fly me   to   the moon  "
function lengthOfLastWord2(sentence2) {
    let trim2 = sentence2.trim();
    let split2 = trim2.split(" ");
    let lastWord2 = split2[split2.length - 1];
    console.log("Count of last word is", lastWord2.length);
}

lengthOfLastWord(sentence2);


let input1 = "listen"
let input2 = "silent"
function anagramCheck1(input1, input2) {
    let sort1 = input1.split('').sort().join('');
    let sort2 = input2.split('').sort().join('');
    if (sort1 === sort2) {
        console.log(`${input1} and ${input2} are anagrams.`);
    } else {
        console.log(`${input1} and ${input2} are not anagrams.`);
    }
}

anagramCheck1(input1, input2);

let input3 = "hello"
let input4 = "world"
function anagramCheck2(input3, input4) {
    let sort3 = input3.split('').sort().join('');
    let sort4 = input4.split('').sort().join('');
    if (sort3 === sort4) {
        console.log(`${input3} and ${input4} are anagrams.`);
    } else {
        console.log(`${input3} and ${input4} are not anagrams.`);
    }
}

anagramCheck2(input3, input4);