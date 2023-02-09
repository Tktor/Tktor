// replace
// 1. 문자열에서 사용 가능
// 2. 첫번째 인자로 넘겨준 문자열을 두번쨰 인자로 넘겨준 문자열로 변겅

// replaceAll
// 1. 주어진 문자열에서 조건에 부합하는 모든 문자열을 치환

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

function solution(s) {
  numbers.forEach((num, i) => {
    s = s.split(num).join(i)
  })
  // for(let i = 0; i < numbers.length; i++) {
    // while(s.includes(numbers[i])) {
    //   s = s.replace(numbers[i], i)
    // }
    
    // s = s.replaceAll(numbers[i], i)
  // }
  return Number(s)
}