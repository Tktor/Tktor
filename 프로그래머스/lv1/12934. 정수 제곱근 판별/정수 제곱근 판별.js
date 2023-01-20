function solution(n) {
  let answer = 0;
  let x = parseInt(Math.sqrt(n))
  if(n === x**2) {
    answer = (x + 1)**2
  } else {
    answer = -1
  }
  return answer;
}