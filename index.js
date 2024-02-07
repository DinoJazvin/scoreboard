let homeScore = 0, awayScore = 0

let scoreHomeEl = document.getElementById("score-home");
let scoreAwayEl = document.getElementById("score-away");
// Get the element by its ID
let homeBorder = document.getElementById('scoreboard-home');
let awayBorder = document.getElementById('scoreboard-away');
let restartEL = document.getElementById('restart')

function restart(){
    homeScore = 0, awayScore = 0;
    scoreAwayEl.textContent = awayScore;
    scoreHomeEl.textContent = homeScore;
    updateBorder()
}

function updateOneHome(){
    homeScore += 1
    scoreHomeEl.textContent = homeScore
    updateBorder()
}

function updateTwoHome(){
    homeScore += 2
    scoreHomeEl.textContent = homeScore
    updateBorder()
}

function updateThreeHome(){
    homeScore += 3
    scoreHomeEl.textContent = homeScore
    updateBorder()
}

function updateOneAway(){
    awayScore += 1
    scoreAwayEl.textContent = awayScore
    updateBorder()
}

function updateTwoAway(){
    awayScore += 2
    scoreAwayEl.textContent = awayScore
    updateBorder()
}

function updateThreeAway(){
    awayScore += 3
    scoreAwayEl.textContent = awayScore
    updateBorder()
}


function updateBorder(){

    // Add a border if the condition is true
    if (awayScore > homeScore) {
        awayBorder.style.border = '4px solid gold';
        homeBorder.style.border = 'none';
    }
    else if (homeScore > awayScore) {
        homeBorder.style.border = '4px solid gold';
        awayBorder.style.border = 'none';
    }
    else if (homeScore == awayScore){
        homeBorder.style.border = 'none';
        awayBorder.style.border = 'none';
    }

}
