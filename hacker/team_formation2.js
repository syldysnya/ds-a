function countTeams(skills, minPlayers, minLevel, maxLevel) {
    let passed = [];
    
    for (let i = 0; i < skills.length; i++) {
        if (skills[i] >= minLevel && skills[i] <= maxLevel) passed.push(skills[i])
    }
    
    // 4, 5, 6, 10 players = 3 to 4
    let teams = [];

    for (let j = 0; j < passed.length; j++) {
        
        for (let k = j + 1; k <= passed.length; k++) {
            let arr = passed.slice(k);
            arr.unshift(passed[j]);
            if (arr.length >= minPlayers) teams.push(arr)
        }
    }

    // teams = teams.filter(ele => ele.length >= minPlayers);
    console.log(teams)
}

countTeams([12, 4, 6, 5, 13, 10], 3, 4, 10);