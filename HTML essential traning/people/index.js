// console.log("hi !!");
function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY;
// smaller than all other number
    for(let num of nums){
        if(num > max_num){
            // num = max_num;
            max_num = num;
            // max_num += 1;
            // max_num += num;
        }
    }
    return max_num;
}