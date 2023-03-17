/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const waitTheStormOut = {
    travel: true,
    text: 'As you wake up and crawl out of your tent you are overcome by relief. The storm has died down. While packing up and preparing to leave, a polar bear approaches you. In panic two possible actions occur to you, either <span>throw some food</span> to distract the bear long enough for you to escape, or <span>confront the bear<span/>. The creature is weak from starvation but still dangerous.',
    nielsenText:'You have no time to talk with your teammates. You must act now.',
    kleistText:'You have no time to talk with your teammates. You must act now.',
    overgaardText:'You have no time to talk with your teammates. You must act now.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    throwSomeFood() {
        food = food - 1;
        showFood();
        loadScene(foodThrownStorm);
    },
    confrontTheBear() {
        injury();
        loadScene(bearConfrontedStorm);
    }
}