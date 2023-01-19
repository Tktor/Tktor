function solution(arr)
{
    const answer = [];
    for(let i = 0; i < arr.length; i++)
        // if(arr[i] !== arr[i+1]) {
        //     answer.push(arr[i])
        // }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        if(answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i])
        }
    console.log('Hello Javascript')
    
    return answer;
}