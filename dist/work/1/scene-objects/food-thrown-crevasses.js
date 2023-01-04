/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const foodThrownCrevasses = {
    travel: false,
    text: 'Moving quickly, you pull a day’s rations out of your pack and throw them as hard as you can. The bear’s attention is drawn by the food which they then scramble to eat. You create just enough time to flee and make it to safety. Relieved but shaken, you turn to <span>continue</span> onwards with the expedition.',
    nielsenText:'Good, good thinking! When they’re hungry there’s no getting away from them. We just narrowly escaped death.',
    kleistText:'Wait, just hang on a… second. I need to get a grip. I can feel my heartbeat in my ears.',
    overgaardText:'I knew we should have brought a rifle. Then we could have saved some food.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    continue() {
        loadScene(findPilot2);
    }
}