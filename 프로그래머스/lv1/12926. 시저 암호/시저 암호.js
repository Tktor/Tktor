function solution(s, n) {
 const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for(let i = 0; i < s.length; i++) {
      if(s[i] === ' ') {
          answer += ' ';
          continue
      }

    const upperOrLower = upper.includes(s[i]) ? upper : lower;
    let index = upperOrLower.indexOf(s[i]) + n;
    if(index >= upperOrLower.length) index -= upperOrLower.length;
    answer += upperOrLower[index]
  }
  return answer;
}