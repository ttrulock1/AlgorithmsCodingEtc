var findWords = function (words) {
    //so you need to return words with asdfghjkl
    //the words need to go in an if statement;
    //A Set in JavaScript is a collection of unique values. It allows you to store and manage data where duplicates are not allowed. 
    //It provides an efficient way to handle operations like checking for existence, adding values, and iterating over unique elements.

    let result = []
    let allowedLetters = new Set ("asdfghjkl")
    //you are often forgetting the () after a .method() like split()
    for (let word of words) {
        //you learned about .every(parameter => has() )
        if (word.toLowerCase().split('').every(char => allowedLetters.has(char))) {
            result.push(word)
        }
    }
        return result
};