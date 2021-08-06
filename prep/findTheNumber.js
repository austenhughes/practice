// find using numaric comparison 
let nums = [2,3,6,6,5];

find();
function find(){

    let largest = nums[0];
    let secondLargest = nums[0];

    for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
    secondLargest = largest;
    largest = nums[i];
    }else if((nums[i] > secondLargest) && (nums[i] < largest)) {
    secondLargest = nums[i];
    }
    }

    return secondLargest;
}

