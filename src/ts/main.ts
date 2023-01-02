addEventListener('DOMContentLoaded', init)

function init() {
    const subSys: site = new Site();
    subSys.init();
}

interface site {
    body: HTMLElement | null;
    init(): void;
}

class Site implements site {
    body: HTMLElement | null = document.querySelector('body');
    init() {
        const header = new NavElement('header', this.body, [], '');
        header.render();
    }
}



// function main() {
//     addMenuListeners();
// }

// function addMenuListeners() {
//     const menuButtons: HTMLCollection = document.getElementsByClassName('main-nav-button');
//     for (const button of menuButtons) {
//         button.addEventListener('click', openSection);
//     }
// }

// function openSection(event: Event) { // Ask David event type
//     const targetSection: HTMLElement | null = document.getElementById(event.target?.dataset.opens);
//     targetSection?.classList.toggle('hidden');
// }