var canPartition = function(nums) {
    var sum = 0;
    
    for (var i = 0 ; i < nums.length ; i ++) {
        sum += nums[i];
    }
    
    if ((sum & 1) == 1) {
        return false;
    }
    sum /= 2;
    
    var n = nums.length;
    var dp = new Array(sum+1);
		for (var i = 0 ; i < dp.length ; i ++) {
        dp[i] = false;
    }
    dp[0] = true;
    
    
    for (var i = 0 ; i < nums.length ; i ++) {
        var num = nums[i];
        for (var j = sum; j > 0; j--) {
        		console.log("num : " + num);
            if (j >= num) {
                dp[j] = dp[j] || dp[j-num];
            }
            console.log("dp[" +j+ "] : " + dp[j]);
        }
    }
    
    return dp[sum];
};