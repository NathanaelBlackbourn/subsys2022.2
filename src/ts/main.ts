addEventListener('DOMContentLoaded', init)

function init() {
    const subSys: site = new Site();
    subSys.init();
}

interface site {
    body: HTMLBodyElement | null;
    init(): void;
}

class Site implements site {
    body: HTMLBodyElement | null = document.querySelector('body');
    init() {
        nav.init(this.body);
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