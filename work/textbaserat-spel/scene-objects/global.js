/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const global = {
    /** Team members only groan if asked thoughts while injured */
    injuredGroan: '*groans*',
    /** Checks if team member is injured or left behind when asked for thoughts. Displays correct text. */
    nielsenThoughts() {
        console.log(injured);
        console.log(leftBehind);
        if (injured === 1 && leftBehind === 0) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 1) {
            sceneText.innerHTML = 'nielsen has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.nielsenText;
        }
    },
    /** Checks if team member is injured or left behind when asked for thoughts. Displays correct text. */
    kleistThoughts() {
        if (injured >= 1 && leftBehind === 1) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 2) {
            sceneText.innerHTML = 'kleist has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.kleistText;
        }
    },
    /** Checks if team member is injured or left behind when asked for thoughts. Displays correct text. */
    overgaardThoughts() {
        if (injured >= 1 && leftBehind === 2) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 3) {
            sceneText.innerHTML = 'overgaard has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.overgaardText;
        }
    },
    /** Displays scene base text */
    back() {
        scene.showText();
    },
}