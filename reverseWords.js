var reverseWords = function (s){
    // split(' ') turns "hello world" in [hello, world]
    //map((a) => a.split(' ')) splits each word in the string and turns each word array of characters(' ') 
    //
    //.map is an array method creates a new array populated with reust of a calling a proved function in calling array;
    //map seems to always need a => map((a)=>a.) 
    //i.e. the arrow function, do not forget to wrap the (a)<-whats the name.
    //the second split takes the letters in the NEW word Array and turns them into an Array
    //.reverse.join('')then reverses it.) no there is NO space between the '' in the ()
    //first join with ('') puts letters together in words
    //second joint with the (' ') pust the words togetherin the sentence
    return s.split(' ').map((a)=>a.split('').reverse()).join(' ').join('');
}