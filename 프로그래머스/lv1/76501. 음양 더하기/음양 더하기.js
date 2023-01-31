function solution(A, B) {
  let answer = 0;
  for(let i = 0; i < A.length; i++) {
    if(B[i] === true) {
      answer += A[i]
    } else {
      answer = answer - A[i]
    }
  }
  return answer
}