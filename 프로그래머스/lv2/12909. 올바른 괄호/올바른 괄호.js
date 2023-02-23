function solution(s) {
  if(s[0] === ")" || s[s.length - 1] === "(") return false
  
  let answer = 0;
  for (const str of s) {
    if (str === "(") {answer ++};
    if (str === ")") {answer --};
    if (answer < 0) {return false};
  }
  return answer === 0;
}