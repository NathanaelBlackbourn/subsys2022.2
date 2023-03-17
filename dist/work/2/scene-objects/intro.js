/**
 * Scene object. Contains the scene's text and functionality.
 * @type {object}
 */
const intro = {
    travel: false,
    text: '2045. Mining operations have been expanded into the arctic circle to supply the space travel corporations evacuating the wealthy from the planet.<br><br>An explosion equivalent to the detonation of ten nuclear bombs has occurred at such a facility in Gertrud Rask Land, northern Greenland. The area has become a crater. A deadzone where no technology, electronic or otherwise, functions. Electrical storms, however, rage and abnormal light patterns are witnessed in the crater from space. Something strange has happened. You and your team are sent in to investigate.<br><br>Travelling across the crater will take you time, keep an eye on the day in the panel above.<br><br>The <span>weather</span> is closing in so your time in the crater is limited. Your <span>food</span> is also limited, if it runs out you will starve to death in the deadzone.<br><br>Words in yellow are keywords. Enter any of them in the command box below and execute to either get more information or take actions.<br><br>You can consult your <span>team</span> at any time in the crater. Type their name followed by the keyword <span>thoughts</span>. Try it now to get acquianted with each of them.<br><br>Click “help” at any time for the games basics.<br><br>Type <span>back</span> at any time to return to the scene description.<br><br>When you are ready to begin type <span>enter the crater</span>.',
    foodText: 'You and you team can only carry so much food on your backs alongside your other equipment. The rations you have remaining are measured in days, displayed in the panel above. Think carefully about how long you spend travelling around the crater because if your food runs out, you’re not coming back.',
    teamText: 'Your team will accompany you on your expedition and give you advice according to their field of expertise. They can help you decide your course of action.<br><br>The crater is a very dangerous and unpredictable environment. Should any member of your team get injured, travel will take you much longer, putting you in danger of freezing or starving to death. You might have to make some difficult choices.',
    weatherText: 'An abnormal weather system has formed over the crater generating temperatures far below usual levels. The temperature currently stands at -20°C but is dropping by the day. Be careful because if the temperature reaches -55°C your gear will no longer be able to protect you and you will most likely freeze to death.',
    nielsenText: 'Pipaluk Nielsen is my name. I’m qualified as a conservation biologist but my job these days amounts to observing the local ecosystem’s decline. It’s not my first mining related ecological disaster but this one seems unique. I’m here to see if we can achieve some kind of damage limitation.',
    kleistText: 'Nice to meet you, I’m Rasmus Kleist. I’m a meteorologist. The readings from the disaster have been unprecedented. I brought all the instruments I could carry to try and make some sense of it. All of them that don’t require electricity.',
    overgaardText: 'I’m Mette Overgaard. I’m the representative for Northern Metals Group, the company that owned the facility used to be about 50 kilometres north of here. I’m a geochemist and I’ll be taking my own measurements for the company.',
    showText() {
        sceneText.innerHTML = this.text;
    },
    food() {
        sceneText.innerHTML = this.foodText;
    },
    team() {
        sceneText.innerHTML = this.teamText;
    },
    weather() {
        sceneText.innerHTML = this.weatherText;
    },
    enterTheCrater() {
        loadScene(midCrater);
    },
}