addEventListener('DOMContentLoaded', () => {
    new Frame();
})

class Frame {
    body: HTMLBodyElement | null;
    constructor() {
        this.body = document.querySelector('body');
        new navStructure.header (this.body);
        new DOMElement ('iframe', this.body, [], '');
    }
}

class DOMElement {
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
    };
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