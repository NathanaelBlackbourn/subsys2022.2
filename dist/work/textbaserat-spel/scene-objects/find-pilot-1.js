/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const findPilot1 = {
    travel: true,
    text: 'Ahead of you encased in ice is a perfect sphere, black as night. The sphere seems to emit a faint glow. You are drawn to it. You use your tools to extract it from the ice, as carefully as you can. The team is in agreement that you should remove it and <span>return</span> to the central crater.',
    nielsenText:'We should bring it with us and we should… protect it.',
    kleistText:'It may not be clear to us now what this is but it will be. It it extremely important that we keep this thing safe.',
    overgaardText:'This could be it, this could be related to the cause of the disaster. There is no question, we are taking it with us.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    /** Adds pilot to inventory and marks game wing completed. Returns to crossroads. */
    return() {
        inventory.push('pilot 1');
        stormCompleted = true;
        loadScene(midCrater);
    }
}