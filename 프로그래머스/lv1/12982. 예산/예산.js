// function solution(d, budget) {
//   let answer = 0
//   d.sort((a, b) => a - b)
//   let sum = 0;
//   for(let i = 0; i < d.length; i++) {
//     sum += d[i]
//     if(sum <= budget) {
//       answer++
//     }
//   }
//   return answer
// }

// function solution(d, budget) {
//   let answer = 0
//   d.sort((a, b) => a - b)
//   while(budget - d[answer] >= 0) {
//     budget -= d[answer]
//     answer++
//   }
//   return answer
// }

function solution(d, budget) {
  const answer = d.sort((a,b) => a - b)
                  .filter((money) => {
                    // 총 예산에서 지원금 차감
                    budget -= money
                    return budget >= 0 
                  })
  return answer.length
}

solution([1,3,2,5,4], 9)