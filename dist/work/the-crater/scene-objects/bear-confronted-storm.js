/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const bearConfrontedStorm = {
    travel: false,
    text: 'A few seconds of adrenaline feel like a lifetime. You and your team manage to fend the creature off but not unscathed. One of you is injured. If you <span>bring them</span> with you travelling will take twice as long. You can keep up the pace if you <span>leave them behind</span> to their death. The strange compulsion drives you forwards.',
    kleistText:'Oh my god… god… oh my god…',
    overgaardText:'We need to go before that thing comes back. We need to go. NOW.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    bringThem() {
        loadScene(findPilot1);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot1);
    }
}