function solution(msg) {
  let answer = []
  const aaa = {
    A : 1,
    B : 2,
    C : 3,
    D : 4,
    E : 5,
    F : 6,
    G : 7,
    H : 8,
    I : 9,
    J : 10,
    K : 11,
    L : 12,
    M : 13,
    N : 14, 
    O : 15,
    P : 16,
    Q : 17,
    R : 18,
    S : 19,
    T : 20,
    U : 21,
    V : 22,
    W : 23,
    X : 24,
    Y : 25,
    Z : 26
  }
  let lastNumber = 27
  let next = ""
  
  const bbb = msg.split("").reduce((acc, cur) => {
    next = acc + cur
    // console.log(next, acc, cur)
    if(aaa[next] === undefined) {
      aaa[next] = lastNumber++
      // console.log(aaa[next])
    } else {
      return acc + cur
    }
    if(aaa[acc] !== undefined) {
      answer.push(aaa[acc])
      return cur
    }
  })
  answer.push(aaa[bbb])
  return answer
}