let countHome = document.getElementById("count-home")
let homeCount = 0

let countGuest = document.getElementById("count-guest")
let guestCount = 0



function homeone() {
    homeCount += 1
    countHome.textContent = homeCount
}

function hometwo() {
    homeCount += 2
    countHome.textContent = homeCount
}

function homethree() {
    homeCount += 3
    countHome.textContent = homeCount
}

function guestone() {
    guestCount += 1
    countGuest.textContent = guestCount
}

function guesttwo() {
    guestCount += 2
    countGuest.textContent = guestCount
}

function guestthree() {
    guestCount += 3
    countGuest.textContent = guestCount
}

function restart() {

    countHome.textContent = 0
    countGuest.textContent = 0
    homeCount = 0
    guestCount = 0
}

