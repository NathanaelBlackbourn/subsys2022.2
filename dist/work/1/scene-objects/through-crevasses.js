/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const throughCrevasses = {
    travel: true,
    text: 'A little faint blue light penetrates deep down into the cavernous cracks in the ice. You are spooked by occasional sounds coming from dark. Your compass however suggests you are heading in the right direction.<br><br>You turn a corner and are met by a terrifying sight, a sleeping polar before you, thin from malnutrition, starving, wakes and catches sight of you. In the split second you have to make up your mind, two ideas occur to you. You and your team can either try to <span>confront the bear</span>, it looks week and you might be able to scare it off. Otherwise you can <span>throw some food</span> to distract it long enough to make an escape. Your food is precious but so is your life.',
    nielsenText:'You have no time to talk with your teammates. You must act now.',
    kleistText:'You have no time to talk with your teammates. You must act now.',
    overgaardText:'You have no time to talk with your teammates. You must act now.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    confrontTheBear() {
        injury();
        loadScene(bearConfrontedCrevasses);
    },
    throwSomeFood() {
        food = food - 1;
        showFood();
        loadScene(foodThrownCrevasses);
    }
}