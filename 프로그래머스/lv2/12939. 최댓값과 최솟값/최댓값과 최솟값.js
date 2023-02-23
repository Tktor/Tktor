function solution(s) {
  const result = s.split(" ").sort((a, b) => a - b)
  const min = result[0]
  const max = result[result.length - 1]
  
  return answer = min + " " + max
}