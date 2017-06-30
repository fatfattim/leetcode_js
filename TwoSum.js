//https://leetcode.com/problems/two-sum/#/description
var twoSum = function(nums, target) {
	if(nums.length < 1) {
    	return undefined
    }
	for( i = 0 ; i < nums.length - 1 ; i ++) {

    	for( j = i + 1 ; j < nums.length ; j++) {
        	if(nums[i] + nums[j] == target) {
            	return new Array(i, j);
            }
        }
    }
    return undefined
};

var nums = [2, 7, 11, 15];
var target = 22;


var result = twoSum(nums, target);
console.log(result);
