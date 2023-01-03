class Header extends DOMElement{
    init() {
        this.children();
    }
    children() {
        new NavContainer('div', this.node, ['nav-container', 'flex'], '');
    }
    toggle() {
        
    }
}

class NavContainer extends DOMElement {
    init() {
        this.children();
    }
    children() {
        new MenuColumn ('div', this.node, ['nav-column'], 'menu-column');
    }
}

class MenuColumn extends DOMElement {
    init() {
        this.children();
    };
    children() {
        new Button (this.node, [], 'projects-button', 'PROJECTS', 'Projects');
        new Button (this.node, [], 'about-button', 'ABOUT ME', 'About');
    }; 
}

class Projects extends DOMElement {
    init() {
        this.children();
    };
    children() {
        // Add project blocks here
        console.log('Rendering project blocks.');
    };
}

class Button extends DOMElement {
    text: string;
    target: string;
    constructor(parent: HTMLElement, classList: string[], id: string, text: string, target: string) {
        super('button', parent, classList, id),
        this.text = text,
        this.target = target
        this.node.innerText = this.text;
        console.log(this.target);
        this.node.addEventListener('click', () => {
            this.listener(target)
        });
    }
    init() {
    }
    listener(target: string) {
        console.log(target);
        const constructor = window[target];
        new constructor('div', document.getElementById('nav-container'), ['nav-column'], this.target.toLowerCase());
    }
}