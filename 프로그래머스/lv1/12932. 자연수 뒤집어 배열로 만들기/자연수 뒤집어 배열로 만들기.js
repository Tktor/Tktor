function solution(n) {
  // const answer = []
  // const str = String(n).split('')
  // const str2 = str.reverse()
  // const str3 = str2.join("")
  // for(let i = 0; i < str2.length; i++) {
  //   answer.push(parseInt(str2[i]))
  // }
  // return answer;
    
    const answer = String(n).split("").reverse()
                            .map((num) => {
                                return Number(num)
                            })
    return answer
}