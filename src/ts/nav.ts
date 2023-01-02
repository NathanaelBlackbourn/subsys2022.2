class Button {
    text: string;
    target: HTMLElement;
    constructor(text: string, target: HTMLElement) {
        this.text = text,
        this.target = target
    }
}

class navContainer {
    render(head: HTMLHeadElement) {
        const thisContainer = document.createElement('div');
        thisContainer.classList.add('nav-container');
        head.appendChild(thisContainer);
    }
}

const nav = {
    init(body: HTMLBodyElement | null) {
        const head = document.createElement('header');
        body?.appendChild(head);
        const navCon = new navContainer();
        navCon.render(head);
    }
}