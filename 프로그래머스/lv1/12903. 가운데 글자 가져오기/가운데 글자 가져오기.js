function solution(s) {
    // let answer = '';
    // let leng = s.length;
    // if(leng % 2 === 0) {
    //     answer = s.substring(leng/2-1, leng/2+1)
    // } else {
    //     answer = s.substring(leng/2, leng/2+1)
    // }
    // return answer;
    const center = Math.floor(s.length / 2) // 삼항연산자
    
    console.log(center, s)
    
    return s.length % 2 === 1
        ? s[center] //true일 경우(홀수)
        : s.substring(center - 1, center + 1) //false일 경우(짝수)
}