let homeScore = 12
let guestScore = 5

const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
}

function addGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
}
