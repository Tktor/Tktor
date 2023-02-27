function solution(skill, skill_trees) {
	// 가능한 스킬 트리의 개수를 담을 변수
	let answer = 0

	for(let i = 0; i < skill_trees.length; i++) {
		let isPossible = true  // 가능한 스킬인지 아닌지 저장하는 변수
		let idx = 0  // 스킬의 선택된 인덱스 값
		for(let j = 0; j < skill_trees[i].length; j++) {
      // 현재 배울 스킬이 skill에 있는 스킬이라면 (순서에 없는 다른 스킬 제외)
			if(skill.includes(skill_trees[i][j])) {
        // 배울수 있는 스킬인지 확인
				if(skill_trees[i][j] === skill[idx]) {
					idx++  // 다음으로 배워야 할 스킬의 인덱스로 이동
				} else {
					isPossible = false  // 불가능한 스킬 트리면 함수 즉시 종료
					break
				}
			}
		}
		if(isPossible) answer++ // 배울 수 있는 스킬트리면 값을 증가시켜준다
	}
	return answer
}