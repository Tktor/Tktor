function solution(arr, divisor) {
  const answer = arr.filter((num) => {
      return num % divisor === 0
  })
  return answer.length === 0 ? [-1] : answer.sort((a,b) => {return a-b})
  
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % divisor === 0) {
//       answer.push(arr[i])
//     } 
//   }
//   // if(answer.length === 0) {
//   //   answer.push(-1) // 빈배열일때 조건문으로
//   // }
//   // answer.sort((a, b) => a - b)
//   return answer.length === 0 ? [-1] : answer.sort((a,b) => {return a - b})
    // 삼항연산자로 바로 return !
}