function solution(s) {
//   let answer = '';
//   let str = s.split(" ")
  
//   for(let i = 0; i < str.length; i++) {
//     for(let j = 0; j < str[i].length; j++) {
//       if(j % 2 === 0) {
//         answer += str[i][j].toUpperCase()
//       } else {
//         answer += str[i][j].toLowerCase()
//       }
//     }
//     if(i < str.length-1) {
//       answer += " "
//     }
//   }
//   return answer
    
    const answer = s.split(" ").map((word) => {
        return word.split("").map((letter, i) => {
            return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join("") // 하나의 문자열로 (붙어서) 만들어준다.
    }).join(" ")
    
    return answer;
    
}