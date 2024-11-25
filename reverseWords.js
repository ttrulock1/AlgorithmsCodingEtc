var reverseWords = function (s){
    // split(' ') turns "hello world" in [hello, world]
    //map((a) => a.split('').reverse.join('')) splits each word(a in the array of characters(' ') then reverses it.)
    //first join 
    return s.split(' ').map((a)=>a.split(' ').reverse()).join('').join();
}