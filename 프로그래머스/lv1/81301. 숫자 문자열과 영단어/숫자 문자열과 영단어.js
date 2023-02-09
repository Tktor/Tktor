// replace
// 1. 문자열에서 사용 가능
// 2. 첫번째 인자로 넘겨준 문자열을 두번쨰 인자로 넘겨준 문자열로 변겅

// replaceAll
// 1. 주어진 문자열에서 조건에 부합하는 모든 문자열을 치환

// 정규표현식
// 표현식 사용법: 슬래시를 열고 닫아준다.
// 슬래시 안쪽에 검증할 문자열

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

function solution(s) {
  for(let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g")
    s = s.replace(regExp, i)
  }
  
  // g: 문자열 전체에서 검색
  // s = s.replace(/zero/g, "0")
  // s = s.replace(/one/g, "1")
  // s = s.replace(/two/g, "2")
  // s = s.replace(/three/g, "3")
  // s = s.replace(/four/g, "4")
  // s = s.replace(/five/g, "5")
  // s = s.replace(/six/g, "6")
  // s = s.replace(/seven/g, "7")
  // s = s.replace(/eight/g, "8")
  // s = s.replace(/nine/g, "9")
  
  // numbers.forEach((num, i) => {
  //   s = s.split(num).join(i)
  // })
  
  // for(let i = 0; i < numbers.length; i++) {
    // while(s.includes(numbers[i])) {
    //   s = s.replace(numbers[i], i)
    // }
    
    // s = s.replaceAll(numbers[i], i)
  // }
  return Number(s)
}