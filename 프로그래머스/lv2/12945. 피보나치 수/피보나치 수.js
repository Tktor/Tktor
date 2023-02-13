// 0, 1, 1, 2, 3, 5, 8, 13, 21, .....


// function solution(n) {
//   const answer = []
//   let prev = 0 // 피보나치의 0번째 숫자
//   let next = 1 // 피보나치의 첫번째 숫자
//   let sum = 1 // 
  
//   for(let i = 2; i <= n; i++) {
//     sum = (prev + next) % 1234567
//     prev = next
//     next = sum
//     answer.push(sum)
//   }
//   return answer[n-2]
// }

function solution(n) {
  let prev = 0 // 피보나치의 0번째 숫자
  let next = 1 // 피보나치의 첫번째 숫자
  let sum = 1 // 
  const answer = new Array(n - 1)
                    .fill(1)
                    .reduce((acc) => {
                      sum = (prev + acc) % 1234567
                      prev = acc
                      return sum
                    }, sum)
  return answer
}
