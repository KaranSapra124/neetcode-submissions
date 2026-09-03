class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        return this.threeSumFn(nums)
    }
    threeSumFn(n){
     let isExist = {};
    let result = [];
    for(let i = 0;i < n.length;i++){
          for(let j = i+1;j < n.length;j++){
          for(let k = j+1;k < n.length;k++){
        if(n[i]+n[j]+n[k]===0 ){

            let triplet = [n[i],n[j],n[k]].sort((a,b)=>a-b);
          if(!isExist[JSON.stringify(triplet)]){
                result.push([...triplet]);
                isExist[JSON.stringify([...triplet])] = true;
          }
        }
    }
    }
    }
    return result;
}
}
