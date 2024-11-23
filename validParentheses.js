// given string s containing just the characters (), {}, and []
//determin if the inpu string is valid;

var isValid = function(s){
    const stack = [];
    const mapping = {
        ')' : ')',
        ']': "[",
        '}' : '{'
    } 
    for (const c of s) {
       //check is c i.e. the character it is iterating through  
        if (mapping[c]){
            if(stack.pop() !== mapping[c]){
                return false;
            }
            else{
                stack.push(c)
            }
        }
        return stack.length === 0;
    }
}