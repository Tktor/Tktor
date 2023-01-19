function solution(s) {
  // const str = s.toLowerCase()
  // const P = str.split('p').length
  // const Y = str.split('y').length
  // return P === Y;
    
    const check = {}; // 알파벳의 개수를 정리하는 객체
    
    const answer = s.toLowerCase().split("")
                    .forEach((str) => {
                        check[str] === undefined ? check[str] = 1 : check[str] += 1
                    })
    return check["p"] === check["y"]
}