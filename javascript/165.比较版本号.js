/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(d => parseInt(d))
    const v2 = version2.split('.').map(d => parseInt(d))
    let n = Math.max(v1.length, v2.length)
    for (let i = 0; i < n; i++) {
        let a = v1[i] || 0
        let b = v2[i] || 0
        if (a != b) {
            return a > b ? 1 : -1
        } 
    }
    return 0
};
// @lc code=end

