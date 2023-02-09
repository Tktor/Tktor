function solution(nums) {
  let answer = 0
  let index = 0
  nums.forEach((num1, i) => {
    index = i + 1
    nums.slice(index).forEach((num2) => {
      index += 1
      nums.slice(index).forEach((num3) => {
        const sum = num1 + num2 + num3
        let count = 0
        for(let k = 1; k <= sum; k++) {
          if(sum % k === 0) {
            count++
            
            if(count > 2) {
              break
            }
          }
        }
        if(count === 2) {
          answer++
        }
      })
    })
  })
  
  
  // let answer = 0
  // for(let i = 0; i < nums.answer; i++) {
  //   for(let j = i + 1; j < nums.length; j++) {
  //     for(let o = j + 1; o < nums.length; o++) {
  //       const sum = nums[i] + nums[j] + nums[o]
        
  //       let count = 0
  //       for(let k = 1; k <= sum; k++) {
  //         if(sun % k === 0) {
  //           // 약수를 구해온다.
  //           count++
  //           if(count > 2) {
  //             break
  //           }
  //         }
  //       }
  //       if(count === 2) {
  //         answer++
  //       }
  //     }
  //   }
  // }
  return answer
}