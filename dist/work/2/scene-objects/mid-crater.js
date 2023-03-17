/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const midCrater = {
    travel: true,
    baseText: 'Traversing the crater is difficult. The surface has been shredded by the explosion, riddled with deep cracks and strewn with boulders.<br><br>Straight ahead of you is the dead centre of the crater. The centre is your main objective, the readings you were able to take before entering seem to suggest that the weather and other phenomena revolve around it. You will need at some point  to go <span>to the centre</span>.',
    stormText: '<br><br><span>To the west</span> is a raging electrical storm, an area of interest for two members of your team.',
    crevassesText : '<br><br><span>To the east</span> is a region of crevasses and caves potentially a refuge for wildlife which might also harbour survivors if there are any.',
    nielsenText: 'We don’t have forever, we should prioritise our research. I want to check the crevasses for any surviving wildlife.',
    kleistText: 'If we can get a better look at that electrical storm, the reading may well give me some insight into what happened here.',
    overgaardText: 'We’re on too tight a schedule. The company wants me to report the cause of the incident. The data suggests it was straight ahead, that’s where we should go.',
    showText() {
        sceneText.innerHTML = this.baseText + this.checkStormCompleted() + this.checkCrevassesCompleted();
    },
    checkStormCompleted() {
        if (stormCompleted === false) {
            return this.stormText
        } else {
            return '';
        }
    },
    checkCrevassesCompleted() {
        if (crevassesCompleted === false) {
            return this.crevassesText
        } else {
            return '';
        }
    },
    toTheCentre() {
        loadScene(craterEpicentre);
    },
    toTheWest() {
        loadScene(electricalStorm);
    },
    toTheEast() {
        loadScene(crevasses);
    },
}