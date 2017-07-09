/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.nums[i] = val;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var total = 0;
    for(var index = i; i <= j ; i ++) {
        total = total + this.nums[i];
    }
    
    return total;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).create(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
var nums = [1, 3, 5]
var obj = new NumArray(nums);
var i = 0;
var j = 2;
var val = -8;
obj.update(i,val)
var param_2 = obj.sumRange(i,j) 