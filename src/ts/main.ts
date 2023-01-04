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
        new navStructure.header ('header', this.body, [], '');
    }
}

abstract class DOMElement {
    node: HTMLElement;
    parent: HTMLElement | null;
    constructor (type: string, parent: HTMLElement | null, classList: string[], id: string) {
        this.node = document.createElement(type);
        this.parent = parent;
        for (const name of classList) {
            this.node.classList.add(name)
        }
        this.node.id = id;
        this.render();
        this.init();
    };
    abstract init(): void;
    render() {
        this.parent?.append(this.node);
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