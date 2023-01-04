window.addEventListener('DOMContentLoaded', addGameEndListeners)

/**
 * HTML for restart button on winning and losing panels
 * @type {string}
 */
const restartButton = '<button id="restart">restart</button>';

/**
 * HTML for command box to replace upon restart
 * @type {string}
 */
const commandHTML = '<input id="input" type="text" placeholder="Enter your course of action here"><button id="execute-button">execute</button>'

/**
 * DOM element, global variable. Listener assigned on page load
 * @type {HTMLDivElement}
 */
let infoBlock;

/**
 * DOM element, global variable. Listener assigned on page load
 * @type {HTMLDivElement}
 */
let commandBlock;

/**
 * DOM element, global variable. Listener assigned on page load
 * @type {HTMLDivElement}
 */
let buttonBlock;

/** Assigning event listeners after page load */
function addGameEndListeners() {
    infoBlock = document.getElementById('info-block');
    commandBlock = document.getElementById('command-block');
    buttonBlock = document.getElementById('button-block')
}

/** End the game when the temperature sinks below -50°C */
function freezeToDeath() {
    infoBlock.classList.toggle('hidden');
    buttonBlock.classList.toggle('hidden');
    sceneText.innerText = 'You ran out of time, the temperature reached -55°C and you and your team froze to death.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

/** End the game when the food reaches zero */
function starveToDeath() {
    infoBlock.classList.toggle('hidden');
    buttonBlock.classList.toggle('hidden');
    sceneText.innerText = 'You spent too long in the chaos of the crater. Your food ran out and you and your team starved to death.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

/** Win the game by returning both pilots to the monolith */
function win() {
    infoBlock.classList.toggle('hidden');
    buttonBlock.classList.toggle('hidden');
    sceneText.innerText = 'You and your team stand back as the air around you illuminates and seems to ignite. You are incinerated by the blast from the launch of the monolith. Congratulations, you win.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

/** Add restart as a listener to the restuart button in both winning and losing screens */
function addRestartListener() {
    document.getElementById('restart').addEventListener('click', restart);
}

/** Reset the game to starting coniditions and opening scene */
function restart() {
    infoBlock.classList.toggle('hidden');
    buttonBlock.classList.toggle('hidden');
    commandBlock.innerHTML = commandHTML;
    loadScene(intro);
    addCommandListeners();
    inventory = [],
    temp = -20;
    showTemp();
    day = 1;
    showDay();
    food = 10;
    showFood();
    resetTeam();
    stormCompleted = false;
    crevassesCompleted = false;
}

/** Restores teams health and returns any teammates left behind */
function resetTeam() {
    healTeam();
    resurrectTeam();
}