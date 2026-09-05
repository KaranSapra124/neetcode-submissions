class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0,
            right = numbers.length - 1,
            mid = 0;

        while (left < right) {
            if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
            else if (numbers[left] + numbers[right] > target) right--;
            else if (numbers[left] + numbers[right] < target) left++;
        }
        // for (let i = 0; i < numbers.length; i++) {
        //     const needed = target - numbers[i];
        //     let left = i + 1;
        //     let right = numbers.length - 1;
        //     while (left <= right) {
        //         const mid = Math.floor((left + right) / 2);

        //         if (numbers[mid] === needed) {
        //             return [i + 1, mid + 1];
        //         }

        //         if (numbers[mid] < needed) {
        //             left = mid + 1;
        //         } else {
        //             right = mid - 1;
        //         }
        //     }
        // }
        return [];
    }
}
