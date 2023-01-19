function solution(n) {
    // let answer = n;
  // for(let i = 1; i <= n / 2 ; i++) {
  //   if(n % i === 0) {
  //     answer += i
  //   }
  // }
     const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
         const num = cur + i
         return acc + (n % num === 0 
             ? num // 약수가 맞을 경우
             : 0 // 약수가 아닐 경우
        )     
     },0)
     return answer
}