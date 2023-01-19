function solution(array, commands) {
//   let answer = [];
//   let arr = []
  
//   for(let i = 0; i < commands.length; i++) {
//     arr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => 
//                                                                {return a-b})
//     answer.push(arr[commands[i][2]-1]);
//   }
//   return answer
    const answer = commands.map((el) => {
        const result = array.slice(el[0]-1, el[1]).sort((a,b) => {
            return a-b
        })
        return result[el[2]-1]
    })
    return answer
}