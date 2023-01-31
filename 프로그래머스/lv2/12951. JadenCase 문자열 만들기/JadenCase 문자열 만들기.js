function solution(s) {
  let answer = []
  let str1 = s.split(' ')
  console.log(str1)
  for(let i = 0; i < str1.length; i++) {
    answer.push(str1[i].substring(0,1).toUpperCase() + str1[i].substring(1).toLowerCase())
  }
  console.log(answer)
  return answer.join(' ')
}