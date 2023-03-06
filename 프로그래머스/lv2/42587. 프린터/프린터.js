// 반복문
// function solution(priorities, location) {    
//   const origin = priorities[location]
//   priorities[location] = "a"
//   let answer = 0
  
//   while(true) {
//     const search = priorities.indexOf("a")
//     priorities[search] = origin
//     const max = Math.max(...priorities)
    
//     priorities[search] = "a"
    
//     if(priorities[0] === "a") {
//       if(origin === max) {
//         answer++
//         return answer
//       }
//     }
    
//     if(priorities[0] === max) {
//       priorities.shift()
//       answer++
//     } else {
//       priorities.push(priorities[0])
//       priorities.shift()
//     }
//   }
// }


// 재귀 함수
function solution(priorities, location) {
  const origin = priorities[location]
  priorities[location] = "a"
  
  const recursion = (count) => {
    const search = priorities.indexOf("a")
    priorities[search] = origin
    const max = Math.max(...priorities)
    
    priorities[search] = "a"
    
    if(priorities[0] === "a" && origin ===max) {
      return ++count
    }
    
    priorities[0] === max ? count++ : priorities.push(priorities[0])
    priorities.shift()
    
    return recursion(count)
  }
  
  return recursion(0)
}