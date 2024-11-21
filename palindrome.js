// Given an interger x, return if x is a palindrom, and false otherwise

var isPalindrome= function (x){
    var s=x.toString()
    t=s.split("").reverse().join("")
    return s === t;
}