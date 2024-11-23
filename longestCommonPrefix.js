var longCommonPrefix = function (strs){
    //first string in the array
    var pref = strs[0];
    //length of the first array
    var prefLen = strs.length;

    for(let i=1; i< strs.length; i++){
        // ok s is the second string now; so we got to check for common letters in; each string will be known as s; we are itterating through the strings; not inside of the strings.
        let s = strs[i];
        //the while checks to see if 
        //Chrissy says, "slice is more flexible and handles negative indices better than substring, though in this specific case, both behave similarly." so instead while (pref !== s.slice(0, prefLen)) {


        while(s.substring(0,prefLen) !== pref ){
            prefLen--;
            if(prefLen == 0){
                return ""
            }
        }
        return pref = pref.substring(0,prefLen)
    }
}