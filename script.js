const readline = require('readline-sync');
const rita = require(rita.js)

const wordData = {
    "nouns": ["cat", "dog", "house", "tree", "mountain"],
    "verbs": ["run", "jump", "sing", "dance", "fly"],
    "adjectives": ["happy", "sad", "bright", "dark", "loud"],
    "adverbs": ["quickly", "slowly", "loudly", "softly", "eagerly"]
}

/** 
* Finding the type of word 
* @param {string} wordType - Input given by the user
* 
* @return {boolean} noun - Boolean value representing if userInput is a noun or not
*
* @return {boolean} verb - Boolean value representing if userInput is a verb or not
*
* @return {boolean} adjective - Boolean value representing if userInput is a adjective or not
*
* @return {boolean} adverb - Boolean value representing if userInput is a adverb or not
*
*/
const wordType = (userInput) => {
    let noun = userInput.isNoun();
    if(noun == true){
        return ("Is the word a noun: " + noun);
    }

    let verb = userInput.isVerb();
    if(verb == true){
        return ("Is the word a verb: " + verb);
    }

    let adjective = userInput.isAdjective();
    if(adjective == true){
        return ("Is the word a adjective: " + adjective);
    }

    let adverb = userInput.isAdverb();
    if(adverb == true){
        return ("Is the word a adverb: " + adverb);
    }
}

wordType(readline.question("Enter a word: "));