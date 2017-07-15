/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
        var breakable = new Array(s.length + 1);
    for(var i = 1 ; i < breakable.length ; i ++) {
            breakable[i] = false;
    }
    breakable[0] = true;
    for(var i=1; i <= s.length; i++) {
            for(var j=0; j < i; j++){
                if(breakable[j] && wordDict.indexOf(s.substring(j, i)) >= 0){
                    breakable[i] = true;
                        
                        break;
                }
            }
        }
    return breakable[s.length]
};