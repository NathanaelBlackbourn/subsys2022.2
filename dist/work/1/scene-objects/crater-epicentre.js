/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const craterEpicentre = {
    travel: true,
    text: 'The eye of the supercell swirls above you. The air is charged and lightning strikes regularly around you. You are confronted by a huge monolith resembling the obelisks of ancient Egypt but smooth and black like obsidian. The monolith is surrounded by a bubble of light and warmth where plant life seems to thrive. Trees bearing fruit of all kinds. It looks even like you could.<br><br>There is no sounds, nothing you could discern to be words but you are somehow aware that the monolith is communicating you you and you understand it. It explains to your that you must return to it two objects, ‘pilots’. They are lost somewhere within the crater. You and you team feel inexplicably compelled to comply. You see an image of yourself returning to <span>insert the pilots</span> into the monolith.<br><br>The monolith tells you, somehow, that you can return here at any time to <span>pick the fruit</span> and refill your rations or to <span>heal</span> any injuries you sustain in the crater.<br><br>From here you can only travel <span>back to the crater</span>.',
    nielsenText: 'This thing, it’s incredible. I really feel like we should do what it says. You heard it too, right? Look at this bubble it has created here in the depths of the frozen landscape.',
    kleistText: 'We should record everything we can, this could be first contact. Should we do what it says? Of course we should! Pick the fruit while we’re here, we can stay is this crater as long as we need!',
    overgaardText: 'Incredible. It’s inexplicable. It’s profoundly… These ‘pilots’, it’s essential that we return them back to this… structure.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    /** Checks inventory for both pilots, invokes win function */
    insertThePilots() {
        if (inventory.includes('pilot 1') && inventory.includes('pilot 2')) {
            win();
        }
    },
    /** Removes all injuries in the team and from screen */
    heal() {
        healTeam()
    },
    /** Refills food rations to maximum */
    pickTheFruit() {
        food = 10;
        showFood();
    },
    backToTheCrater() {
        loadScene(midCrater);
    }

}