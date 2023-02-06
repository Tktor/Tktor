

function solution(answers) {
  let answer = []
  let pattern1 = [1, 2, 3, 4, 5]
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  let result = [0,0,0]
  
  for(let i = 0; i < answers.length; i++) {
    if(pattern1[i%5] === answers[i]) {
      result[0] += 1
    }
    if(pattern2[i%8] === answers[i]) {
      result[1] += 1
    }
    if(pattern3[i%10] === answers[i]) {
      result[2] += 1
    }
  }
  for(let i = 0; i < 3; i++) {
    if(result[i] === Math.max(...result)) {
      answer.push(i+1)
    }
  }
  return answer
}