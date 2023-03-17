/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const electricalStorm = {
    travel: true,
    text: 'You reach the edge of the storm. Bolts of lightning strike from the ground to the ceiling and back. The noise is deafening. You can either <span>risk the storm</span> and travel through or <span>wait the storm out</span> and see if it dies down. You feel an alien compulsion pulling you westwards.',
    nielsenText:'I don’t want to wait here. The bears in the area are starving and could well track us down overnight. The lightening looks sparse enough for us to make it through.',
    kleistText:'The storm is very active, it’s very likely that we will get hurt if we try and rush through. It also looks to me to be losing strength. I think we’re safer if we wait, maybe just one night.',
    overgaardText:'This isn’t my area. I think we’re in danger either way anyway.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    riskTheStorm() {
        injury();
        loadScene(enterTheStorm);
    },
    waitTheStormOut() {
        loadScene(waitTheStormOut);
    },
}