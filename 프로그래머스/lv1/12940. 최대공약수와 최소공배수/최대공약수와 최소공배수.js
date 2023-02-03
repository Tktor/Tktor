// function solution(n, m) {
//   let max = 0;
//.  최대 공약수 구하기
//   for(let i = 1; i <= m; i++) {
//     if(n%i === 0 && m%i === 0) {
//       console.log(i,n,m)
//       max = i
//     }
//   }
//   최소 공배수 구하기  
//   let min = 0
//   for(let i = m; i <= n*m; i += m) {
//     if(i%n === 0) {
//       min = i
//       break
//     }
//   }
//   return [max, min]
// }

function solution(n, m) {
  // 유클리드 호제법
  // - 최대 공약수를 구하기 위한 알고리즘
  
  // 1. a를 b로 나누었을 때 (a > b, 큰 수를 더 작은 수로 나누었을 때)
  // 2. 나머지 값은 c
  // 3. c가 0이라면, b가 최대공약수
  // 4. c가 0이 아니라면, b를 c로 나눠준다.(1번 과정부터 반복)
  
  let a = Math.max(n,m)
  let b = Math.min(n,m)
  let c = 0 // a를 b로 나누었을 때의 나머지 값
  
  while(a % b > 0) {
    c = a % b // 큰 수를 작은 수로 나누었을 때의 나머지 값
    a = b // 큰 수 위치에 작은 수를 다시 할당
    b = c // 작은 수의 위치에 나머지 값을 다시 할당
  }
  // 최소 공배수 : n과 m을 곱한 갑을 최대공약수로 나누어준 값
  return [ b , (n*m)/b]
}

solution(3, 12)
solution(2, 5)