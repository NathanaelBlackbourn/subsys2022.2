class Header extends DOMElement{
    init() {
        this.render();
        this.children();
    }
    children() {
        const navCon = new navContainer('div', this.node, ['nav-container'], '');
    }
    toggle() {
        
    }
}

class navContainer extends DOMElement {
    init() {
        this.render();
        this.children();
    }
    children() {
        
    }
}

class Button {
    text: string;
    target: HTMLElement;
    constructor(text: string, target: HTMLElement) {
        this.text = text,
        this.target = target
    }
    init() {
        // Add listener, fill with text
    }
    listener() {

    }
}

// class Header {
//     DOMElement: HTMLElement = document.createElement('header');
//     init(body: HTMLBodyElement | null) {
//         body?.appendChild(this.DOMElement);
//         this.renderContainer();
//     };
//     renderContainer() {
//         const navCon = new NavDiv(['nav-container'], 'main-nav');
//         navCon.render(this.DOMElement);
//     }
// }

// class NavDiv {
//     classNames: string[];
//     id: string;
//     constructor (classNames: string[], id: string) {
//         this.classNames = classNames;
//         this.id = id;
//     }
//     render(parent: HTMLElement) {
//         const divA: HTMLDivElement =  document.createElement('div');
//         for (const name of this.classNames) {
//             divA.classList.add(name);
//         }
//         divA.id = this.id;
//     }
    // render(parent: HTMLDivElement) {
    //     parent.append(navCol);
    // }
    // create(classNames: string[], id: string) {
    //     const navCol: HTMLDivElement = document.createElement('div');
    //     for (const name of classNames) {
    //         navCol.classList.add(name);
    //     }
    //     navCol.id = id;
    //     return navCol;
    // }
// }