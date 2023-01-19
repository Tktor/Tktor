function solution(x, n) {
  // let answer = [];
  // let result = 0;
  // for(let i = 0; i < n; i++) {
  //   result += x
  //   answer[i] = result 
  // }
  //   return answer;
  const answer = new Array(n).fill(1).map((num,  i) => {
    return (i + num)*x
  })
  return answer
}