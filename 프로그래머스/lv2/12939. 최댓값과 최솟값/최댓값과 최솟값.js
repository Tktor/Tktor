function solution(s) {
  // 문자열 공백 기준으로 배열로 만들어서 오름차순 정렬  
  const result = s.split(" ").sort((a, b) => a - b)
  // s의 최솟값
  const min = result[0]
  // s의 최댓값
  const max = result[result.length - 1]
  
  // 공백과 함께 최솟값, 최댓값 리턴
  return answer = min + " " + max
}