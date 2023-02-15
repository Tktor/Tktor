function solution(n) {
  // 1. 3진법 변환
  n = n.toString(3)
  
  // 2. 앞 뒤 반전(뒤집기)
  let reverse = ''
  for(let i = n.length - 1; i >= 0; i--) {
    reverse += n[i]
  }
  
  // 3. 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3)  
}  

// 다른 풀이
// function solution(n) {
//   // return parseInt(n.toString(3).split('').reverse().join(''),3)
// } 