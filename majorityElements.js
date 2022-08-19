var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);

    const l = nums.length;

    if (l % 2 === 0) {
        return nums[l / 2]
    } else {
        return nums[(l - 1) / 2]
    }
};

console.log(majorityElement([3, 2, 4, 2, 1]))