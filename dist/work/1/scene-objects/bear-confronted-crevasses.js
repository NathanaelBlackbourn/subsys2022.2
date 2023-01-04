/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const bearConfrontedCrevasses = {
    travel: false,
    text: 'A few seconds of adrenaline feel like a lifetime. You and your team manage to fend the creature off but not unscathed. One of you is injured. If you <span>bring them</span> with you travelling will take twice as long. You can keep up the pace if you <span>leave them behind</span> to their death. The strange compulsion drives you forwards.',
    kleistText:'Can they move? Oh no. We need to get out of this crater. I don’t think we can do this.',
    overgaardText:'We can set them up a fire and some shelter down here then circle back with the helicopter when this weird storm dies down. Let’s get going.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    bringThem() {
        loadScene(findPilot2);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot2);
    }
}