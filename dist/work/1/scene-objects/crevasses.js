/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const crevasses = {
    travel: true,
    text: 'A landscape of deep crevasses extends before you. Created by the explosion which form the crater as it clawed at the land. There are two ways to proceed. If you travel <span>over the crevasses</span> it will be easy to navigate but it’s dangerous. Thin sheets of ice and conceal crevasses resulting in disaster if you try to walk over them. If you choose to travel <span>through the crevasses</span> you avoid the risk of falling to your death but you could lose your way and you don’t know what might be taking shelter down there from the storm.',
    nielsenText:'If there are any bears remaining in this area they’re probably sheltering down there. As much as we want to check for survivors, we also want to survive ourselves. Let’s go over.',
    kleistText:'A friend of mine based at Station Nord, he fell down a crevasse last winter. He can’t feel his legs any more. He lost his job, his partner, he couldn’t even keep his dog. If you decided to then I’ll follow you over but know the danger you’re putting us all in.',
    overgaardText:'Well if both ways are dangerous then let’s take the fastest route. Food is running out every day we’re here.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    overTheCrevasses() {
        injury();
        loadScene(overCrevasses);
    },
    throughTheCrevasses() {
        loadScene(throughCrevasses);
    }
}