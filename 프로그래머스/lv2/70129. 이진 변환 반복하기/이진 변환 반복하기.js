// function solution(s) {
//   let count = 0 // 변환 횟수
//   let remove = 0 // 제거된 0의 개수
//   while(s !== "1") {
//     count++ // 변환 횟수 === 반복 횟수
//     // 1. 0을 제거
//     let temp = ''
//     for(let i = 0; i < s.length; i++) {
//       if(s[i] === '0') {
//         // 참조해온 요소가 '0'인 경우를 찾는다.
//         remove++
//       } else {
//         temp += s[i] // 문자열 '1'만 들어온다.
//       }
//     }
//     s = temp.length   // 결과가 문자열 '1'이 아니라면, 다시 반복
//     s = s.toString(2) // 결과가 문자열 '1'이라면 반복문 종료
//   }
  
//   return[ count, remove ]
// }

function solution(s) {
  // recursion 함수(재귀함수)
  // 1. 설정된 값이 구해질 때 까지 무한 실행(while문 대체 가능)
  // 2. 실행한 함수 내부에서 스스로를 다시 호출
  function recursion(s, [count, remove]) {
    if(s === "1") {
      return [count, remove]
    }
    count++
    remove += s.split("").filter(el => el === "0").length
    s = s.split("").filter(el => el === "1").length
    s = s.toString(2)
    
    return recursion(s, [count, remove])
  }
  
  return recursion(s, [ 0, 0 ])
}