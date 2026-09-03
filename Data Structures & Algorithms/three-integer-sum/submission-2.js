class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        return this.threeSumFn(nums)
    }
    threeSumFn(n){
    //  let isExist = {};
    // let result = [];
    // for(let i = 0;i < n.length;i++){
    //       for(let j = i+1;j < n.length;j++){
    //       for(let k = j+1;k < n.length;k++){
    //     if(n[i]+n[j]+n[k]===0 ){

    //         let triplet = [n[i],n[j],n[k]].sort((a,b)=>a-b);
    //       if(!isExist[JSON.stringify(triplet)]){
    //             result.push([...triplet]);
    //             isExist[JSON.stringify([...triplet])] = true;
    //       }
    //     }
    // }
    // }
    // }
    // return result;
        n.sort((a,b)=>a-b);
    let isExist = {};
    let result = [];
for(let i =0;i < n.length-2;i++){
    if(i > 0 && n[i]===n[i-1]) continue;
    let j = i+1;
    let k = n.length-1;
    while(j < k){
        let sum =  n[i] + n[j] + n[k];
        if(sum === 0){
            result.push([n[i],n[j],n[k]]);
            j++;
            k--;
            while(j < k && n[j]===n[j-1]) j++;
              while(j < k && n[k]===n[k+1]) k--;
        }else if(sum < 0){
            j++;
        }else if(sum > 0){
            k--;
        }
    }
}
    
    return result;
}
}
