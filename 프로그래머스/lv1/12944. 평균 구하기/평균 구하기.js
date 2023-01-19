function solution(arr) {
//     const answer = 0;
//     for(let i = 0; i < arr.length; i++) {
//         answer = answer + arr[i]
//     }

//     return answer / arr.length; 
    
    const sum = arr.reduce((acc, cur) => {
        return acc + cur
    })
    
    return sum / arr.length
}