// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a > b) { 
        return a
    } else {
        return b
    } 
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(words){
    if (words.length === 0)
    return null
    let word = "";
    for (let i = 0; i < words.length; i++) {
        if (word.length < words[i].length) {
            word = words[i];
        }
    } 
        return word 
         
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];




function sumNumbers(numbers) {
    let sum = 0

    numbers.forEach(number => {
        sum += number
    });
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0)
        return 0
    let sum = 0

    numbers2.forEach(number => {
        sum += number
    });

    return sum / numbers2.length
}




// Iteration 5 | Find Elements
// const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToLook) {
    if (words2.length === 0)
        return null
    
    let wordExists = false
    words2.forEach(element => {
        if (wordToLook === element){
            wordExists = true
            return
        }
    })

    return wordExists
}
