/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const findPilot2 = {
    travel: true,
    text: 'Ahead of you is a tree, flourishing green with leaves, inexplicably thriving in the deadzone. Perched in its branches is a perfectly smooth heavy black sphere. Slightly larger than a tennis ball. Some force inside you compiles you to take it. You remove it from the tree and pack it with the rest of your gear. The only visible way for you to travel now it to <span>return</span> the way you came, back to the expanse of the crater.',
    nielsenText:'I read about something like this in inuit mythology. We must learn how it is keeping that tree alive.',
    kleistText:'If there are more of these things in this crater, we need to find them. We need to… go to the centre.',
    overgaardText:'When we leave this hell you will all sign non-disclosure agreements. This is property of the company. We must keep it safe.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    /** Adds pilot to inventory and marks game wing completed. Returns to crossroads. */
    return() {
        inventory.push('pilot 2');
        crevassesCompleted = true;
        loadScene(midCrater);
    }
}