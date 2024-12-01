// In order to get this one you need to dive deep into the concepts of Math

const maxConsecutiveOnes = function(nums){
    let counter = 0;
    let MaxConsecutive = 0;

    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 1){
            counter++
            Math.max(counter,MaxConsecutive)
        } else {
             counter = 0
        }
    }
}