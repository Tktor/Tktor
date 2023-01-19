function solution(s) {
  let answer = true;
  if(s.length !== 4 && s.length !== 6) {
    return false
  }
  // for(let i = 0; i < s.length; i++) {
  //   if(isNaN(s[i])) {
  //     return false
  //   }
  // }
  // return answer;
  const result = s.split("").filter(el => { return Number.isNaN(Number(el))})
  return result.length === 0;
}