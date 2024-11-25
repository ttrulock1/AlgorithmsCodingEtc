var lengthOfLastWord = function (s){
    //split turn the string into an array.
    var words = s.trim().split(' ');
    //[words.length-1] picks the last word fronm the array
    return words[words.length-1].length
}