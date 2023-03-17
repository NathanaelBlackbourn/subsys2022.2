/** Add to inured variable, show injury on screen */
function injury() {
    injured = injured + 1;
    document.getElementById('team-' + (injured+leftBehind)).classList.toggle('injured');
    document.getElementById('injured-' + (injured+ leftBehind)).classList.toggle('hidden');
}

/** Removes a team memeber from the team array and on screen. Adds to the leftBehind variable to step the injury function base up one. */
function leaveBehind() {
    document.getElementById('team-' + (injured + leftBehind)).classList.toggle('hidden');
    injured = injured -1;
    leftBehind = leftBehind + 1;
}

/** Removes all injuries on screen and in system  */
function healTeam () {
    for (let i = 0; i < injured;) {
        document.getElementById('team-' + (injured + leftBehind)).classList.toggle('injured');
        document.getElementById('injured-' + (injured + leftBehind)).classList.toggle('hidden');
        injured = injured - 1;
    }
}

/** Replaces team icons on screen and resets lefBehind variable */
function resurrectTeam() {
    for (let i = 0; i < leftBehind;) {
        document.getElementById('team-' + (injured + leftBehind)).classList.toggle('hidden');
        document.getElementById('team-' + (injured + leftBehind)).classList.toggle('injured');
        document.getElementById('injured-' + (injured + leftBehind)).classList.toggle('hidden');
        leftBehind = leftBehind - 1;
    }
}