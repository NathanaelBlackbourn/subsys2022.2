/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const enterTheStorm = {
    travel: true,
    text: 'You immediately regret your decision. Lightening cracks deafeningly all around you. You turn to retrace your steps but you are so disorientated that you don’t know which way you came from. You choose any direction and rush forwards. You spend hours in the storm but you emerge from the other side still with your team. One of them has been struck and can barely speak. The compulsion insists that you continue westwards. You look to your injured teammate and realise you must decide to either <span>leave them behind</span> probably to die ot to <span>bring them</span> with you, slowing your travel and putting you all at risk.',
    kleistText:'There are no existing models that can explain that. We must understand what happened here. They can walk, just about. Let’s take them home and come back with more people.',
    overgaardText:'What!? My ears are ringing so much that I can barely make out what you’re saying. It will fade. We need to move forwards! It’s your decision but bringing them will be a serious burden on the expedition.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot1);
    },
    bringThem() {
        loadScene(findPilot1);
    }
}