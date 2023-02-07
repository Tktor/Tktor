function solution(nums) {
  let answer = [];
  let arr = nums.length / 2
  
  for(let i = 0; i < nums.length; i++) {
    if(answer.length !== arr) {
      if(answer.includes(nums[i]) === false) {
        answer.push(nums[i])
      } 
    }
  }
  return answer.length
}