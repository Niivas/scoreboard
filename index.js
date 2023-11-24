// initialize variables
let homeScore = 0;
let guestScore = 0;
homeScoreDisplay = document.getElementById("home-score");
guestScoreDisplay = document.getElementById("guest-score");

// Home team functions

function homePlusOne() {
    homeScore++;
    homeScoreDisplay.textContent = homeScore;
    highlightLeadingTeam();
}

function homePlusTwo() {
    homeScore +=2;
    homeScoreDisplay.textContent = homeScore;
    highlightLeadingTeam();
}

function homePlusThree() {
    homeScore +=3;
    homeScoreDisplay.textContent = homeScore;
    highlightLeadingTeam();
}

// Guest team functions

function guestPlusOne() {
    guestScore++;
    guestScoreDisplay.textContent = guestScore;
    highlightLeadingTeam();
}

function guestPlusTwo() {
    guestScore +=2;
    guestScoreDisplay.textContent = guestScore;
    highlightLeadingTeam();
}

function guestPlusThree() {
    guestScore +=3;
    guestScoreDisplay.textContent = guestScore;
    highlightLeadingTeam();
}


// Highlighting the leading team
function highlightLeadingTeam() {
    if (homeScore === guestScore) {
        console.log("Tie game");
        document.getElementById("display-home-score").style.border = "none";
        document.getElementById("display-guest-score").style.border = "none";
    }
    else if (homeScore > guestScore) {
        document.getElementById("display-home-score").style.border = "3px solid green";
        document.getElementById("display-guest-score").style.border = "none";
    }
    else {
        document.getElementById("display-home-score").style.border = "none";
        document.getElementById("display-guest-score").style.border = "3px solid green";
    }
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreDisplay.textContent = homeScore;
    guestScoreDisplay.textContent = guestScore;
    document.getElementById("display-home-score").style.border = "none";
    document.getElementById("display-guest-score").style.border = "none";
}