function solution(people, limit) {
  let answer = 0
  let weight = people.sort((a, b) => b - a)
  // console.log(weight)
  let left = 0
  let right = people.length -1
  
  while(left < right) {
    if(people[left] + people[right] > limit) {
      left++
    } else {
      left++
      right--
    }
    // console.log(left, right)
    answer++
    // console.log(answer)
  }
  if(left === right) answer++
  return answer
}