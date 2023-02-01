function solution(a, b) {
  let result = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let months = [31,29,31,30,31,30,31,31,30,31,30,31]
  let answer = b + 4
  for(let i = 0; i < a-1; i++) {
    answer += months[i]
    console.log(answer, i, months[i])
  }
  return result[answer % 7]
}