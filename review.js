//length of the last word

const x = "Some day the boomers will all be dead.";

var lengthOfTheLastWord = function (strs) {
  //the first thing is that you need to is come up with you own theory.
  //theory: we need to turn string into an array and then iterate through it to the last word then find it's length;
  // forgot the return; forgot the () in trim;
  //forgo the trim
  // forgot var
  var words = strs.trim().split(" ");
  return words[n - 1].length;
};
