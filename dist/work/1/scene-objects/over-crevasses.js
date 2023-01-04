/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const overCrevasses = {
    travel: true,
    text: 'You survive your first day sounding out the ice and crossing carefully but and you set out to leave on day two, a member of your team crashes through and breaks their leg. You can either <span>bring them</span> with you and try to get them some kind of medical attention in time or you can <span>leave them behind</span> probably to their death.',
    kleistText:'No data is worth a human life, we have to do what we can to get them back to safety.',
    overgaardText:'Taking them with us will slow us down so much that we might not even make it out of here ourselves. It’s a grim decision but I say we leave them.',
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