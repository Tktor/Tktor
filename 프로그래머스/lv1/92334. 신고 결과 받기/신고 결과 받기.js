// function solution(id_list, report, k) {
//   const reporter = {} // 신고한 사람이 대상으로 삼은 사람이 누구인지 저장
//   const reportedList = {} // 신고 당한 사람의 누적 신고량을 저장
//   const answer = []
//   report = [...new Set(report)]
  
//   for(let i = 0; i < report.length; i++) {
//     const info = report[i].split(" ")
//     if(reporter[info[0]] === undefined) {
//       reporter[info[0]] = []
//     }
//     if(reportedList[info[1]] === undefined) {
//       reportedList[info[1]] = 0
//     }
//     // 중복 신고 제거
//     // 같은 유저에 대한 신고 이력이 있는지를 체크
//     // if(reporter[info[0]].includes(info[1]) === false) {
//     //   reporter[info[0]].push(info[1])
//     //   reportedList[info[1]]++
//     // }
//     reporter[info[0]].push(info[1])
//     reportedList[info[1]]++
//   }
//   for(let i = 0; i < id_list.length; i++) {
//     const arr = reporter[id_list[i]] || []
//     answer[i] = 0
//     for(let j = 0; j < arr.length; j++) {
//       if(reportedList[arr[j]] >= k) {
//         answer[i]++
//       }
//     }
//   }
//   return answer
// }


function solution(id_list, report, k) {
  const reporter = {} // 신고한 사람이 대상으로 삼은 사람이 누구인지 저장
  const reportedList = {} // 신고 당한 사람의 누적 신고량을 저장
  report = [...new Set(report)]
  
  report.forEach((el) => {
    el = el.split(" ")
    
    if(reporter[el[0]] === undefined) reporter[el[0]] = []
    if(reportedList[el[1]] === undefined) reportedList[el[1]] = 0
    
    reporter[el[0]].push(el[1])
    reportedList[el[1]]++
  })
  const answer = id_list.map((id) => {
    const arr = reporter[id] || []
    
    return arr.reduce((acc, cur) => {
      return acc + (reportedList[cur] >= k ? 1 : 0)
    }, 0)
  })
  return answer
}